import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Body, Text, Thumbnail, View } from "native-base";

const DataItem = ({ data }) => (
  <TouchableOpacity
    onPress={this._handlePress}
    style={{ flexDirection: "row" }}
    activeOpacity={0.5}
  >
    <Thumbnail
      style={styles.Thumbnail}
      square
      large
      source={{
        cache: "force-cache",
        uri: data.urlToImage || "http://via.placeholder.com/350x150"
      }}
    />
    <Body>
      <Text style={{ fontSize: 14 }} numberOfLines={2}>
        {data.title}
      </Text>
      <Text note numberOfLines={3}>
        {data.description}
      </Text>
      <View style={styles.SourceName}>
        <Text note>{data.source.name}</Text>
      </View>
    </Body>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  Thumbnail: { backgroundColor: "#eee", alignSelf: "center" },
  SourceName: { flex: 1, flexDirection: "row", marginTop: 8, marginLeft: 8 }
});

export default DataItem;
