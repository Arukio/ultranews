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
import { Font } from "expo";
import getTheme from "../../native-base-theme/components";
import platform from "../../native-base-theme/variables/platform";
import GenerateNews from "../components/GenerateNews";

class BasicTab extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header hasTabs>
            <Body>
              <Title> News App</Title>
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
        </Container>
      </StyleProvider>
    );
  }
}

export default BasicTab;
