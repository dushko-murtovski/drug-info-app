import React, { useLayoutEffect, Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { WebView } from "react-native-webview";

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack();
    }}
  >
    <Text>&lt; Back</Text>
  </TouchableOpacity>
);

export default class Browser extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Browser",
    headerLeft: <BackButton navigation={navigation} />,
  });

  render() {
    // console.log("props: ", this.props);
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: this.props.route.params.url,
          }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
