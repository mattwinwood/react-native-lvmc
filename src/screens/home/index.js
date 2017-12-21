import React, {Component} from "react";
import {ImageBackground, View, StatusBar} from "react-native";
import {Container, Button, H3, Text} from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
                    <View style={styles.logoContainer}>
                        <ImageBackground source={launchscreenLogo} style={styles.logo}/>
                    </View>
                    <View
                        style={{
              alignItems: "center",
              marginBottom: 0,
              backgroundColor: "transparent"
            }}>
                        <H3 style={styles.text}>INNOVATIVE TRANSIT</H3>
                    </View>
                    <View style={{ marginTop: 30, marginBottom: 30 }}>
                        <Button
                            style={{ backgroundColor: "#69b445", alignSelf: "center" }}
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Text
                                style={{ fontSize: 14, fontWeight: "600"}}>
                                App Proof of Concept
                            </Text>
                        </Button>
                    </View>

                </ImageBackground>
            < / Container >
        );
    }
}

export default Home;
