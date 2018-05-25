import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Font, AppLoading } from "expo";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./screens/Home";

const Root = createStackNavigator(
  {
    Home: Home
  },
  {
    navigationOptions: {
      header: null,
      headerStyle: {
        backgroundColor: "#F75C03"
      }
    }
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <Root />
        </Provider>
      );
    }
  }
}
