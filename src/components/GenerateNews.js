import React, { Component } from "react";
import { Content, List, ListItem, Text } from "native-base";
import axios from "axios";
import { connect } from "react-redux";
import DataItem from "../components/DataItem";
import { openUrl } from "../actions/news";

class GenerateNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      news: {}
    };
  }

  componentDidMount() {
    this.fetchNews(this.props.category);
  }

  handleOpenUrl = data => {
    this.props.dispatch(openUrl(data));
  };

  fetchNews = async category => {
    this.setState({ isFetching: true });
    let self = this;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us`,
        {
          headers: { "X-Api-Key": "9d8d580cf4be49c4a9a82a59ec31087f" }
        }
      )
      .then(response => {
        self.setState({
          isFetching: false,
          news: response.data.articles
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    if (this.state.isFetching) {
      return <Text>Loading..</Text>;
    } else {
      return (
        <Content>
          <List
            dataArray={this.state.news}
            renderRow={item => (
              <ListItem>
                <DataItem data={item} openUrl={this.handleOpenUrl} />
              </ListItem>
            )}
          />
        </Content>
      );
    }
  }
}

export default connect()(GenerateNews);
