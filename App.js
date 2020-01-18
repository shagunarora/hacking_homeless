import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from "react-native";
import * as Font from "expo-font";
import { Block, Text } from "./components";
import * as theme from "./theme";
import * as mocks from "./mocks";

class App extends Component {
  state = {
    fontsLoaded: false
  };
  loadFonts() {
    return Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
    });
  }

  async componentDidMount() {
    await this.loadFonts();
    this.setState({ fontsLoaded: true });
  }

  renderHeader() {
    return (
      <Block flex={0.75} column style={{ paddingHorizontal: 15 }}>
        <Block flex={false} row style={{ paddingTop: 40, paddingBottom: 15 }}>
          <Block center>
            <Text h3 white>
              Share Healthy
            </Text>
          </Block>
        </Block>
        <Block card shadow color="white" style={styles.headerChart}>
          <Block flex={false} row center></Block>
        </Block>
      </Block>
    );
  }

  renderRequest(request) {}

  renderRequests() {
    // const { beneficiary } = this.props;
    return (
      <Block flex={0.8} column color="gray2" style={styles.requests}>
        {/* <Block flex={false} row space="between" style={styles.requestsHeader}>
          <Text light>Recent Updates</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text semibold>View All</Text>
          </TouchableOpacity>
        </Block> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingTop: 20,
              paddingBottom: 15
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center"
              }}
              source={require("./assets/medical.png")}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              paddingHorizontal: 50
            }}
          >
            <Text center secondary semibold>
              Find benefits provided by government and fedral organisation in
              your state
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Block>
    );
  }

  render() {
    if (!this.state.fontsLoaded) {
      return (
        <Block center middle>
          <Image
            style={{ width: 140, height: 140 }}
            source={require("./assets/icon.png")}
          />
        </Block>
      );
    }

    return (
      <SafeAreaView style={styles.safe}>
        {this.renderHeader()}
        {this.renderRequests()}
      </SafeAreaView>
    );
  }
}
App.defaultProps = {
  beneficiary: mocks.beneficiary
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 30,
    zIndex: 1
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 5
  },
  requests: {
    marginTop: -60,
    paddingTop: 72,
    paddingHorizontal: 15,
    zIndex: -1
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  request: {
    padding: 20,
    marginBottom: 15
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90
  }
});
