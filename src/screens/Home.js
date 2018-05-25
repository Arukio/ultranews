import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Tabs,
  Tab,
  Body,
  Text,
  StyleProvider,
  Content,
  List,
  ListItem,
  ScrollableTab
} from "native-base";
import { Share } from "react-native";
import { Font } from "expo";
import { connect } from "react-redux";
import { closeUrl } from "../actions/news";
import getTheme from "../../native-base-theme/components";
import platform from "../../native-base-theme/variables/platform";
import GenerateNews from "../components/GenerateNews";
import Modal from "../components/Modal";

class Home extends Component {
  handleCloseUrl = () => {
    this.props.dispatch(closeUrl());
  };

  handleShare = data => {
    const { url, title } = data;
    const message = `${title}\n\n Read more at \n${url}\n\n Via Ultra News`;
    Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}?` }
    );
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header hasTabs>
            <Body>
              <Title>Ultra News</Title>
            </Body>
          </Header>

          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Business">
              <GenerateNews category="business" />
            </Tab>

            <Tab heading="Health">
              <GenerateNews category="health" />
            </Tab>
            <Tab heading="Technology">
              <GenerateNews category="technology" />
            </Tab>
            <Tab heading="Sports">
              <GenerateNews category="sports" />
            </Tab>
          </Tabs>
          <Modal
            show={this.props.showModal}
            data={this.props.data}
            onClose={this.handleCloseUrl}
            onShare={this.handleShare}
          />
        </Container>
      </StyleProvider>
    );
  }
}

mapStateToProps = state => ({
  showModal: state.news.showModal,
  data: state.news.data
});

export default connect(mapStateToProps)(Home);
