import React from "react";
import { Modal, WebView } from "react-native";
import {
  Container,
  Header,
  Text,
  Body,
  Left,
  Right,
  Title,
  Button,
  Content,
  Icon
} from "native-base";

const ModalComponent = ({ show, data, onClose, onShare }) => (
  <Modal
    visible={show}
    onClose={onClose}
    onRequestClose={() => alert("closed")}
  >
    <Container>
      <Header>
        <Left>
          <Button onPress={onClose} transparent>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>{data.title}</Title>
        </Body>
        <Right>
          <Button onPress={() => onShare(data)} transparent>
            <Icon name="share" />
          </Button>
        </Right>
      </Header>
      <Content contentContainerStyle={{ flex: 1 }}>
        <WebView source={{ uri: data.url }} scalesPageToFit />
      </Content>
    </Container>
  </Modal>
);

export default ModalComponent;
