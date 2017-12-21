import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    List,
    ListItem,
    Card,
    CardItem,
    Text,
    Thumbnail
} from "native-base";
import styles from "./styles";
import {Image} from "react-native";

const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");
const datas = [
    {
        route : "RowNB",
        text : "Row Grid"
    },
    {
        route : "ColumnNB",
        text : "Column Grid"
    },
    {
        route : "NestedGrid",
        text : "Nested Grid"
    },
    {
        route : "CustomRow",
        text : "Custom Row Size Grid"
    },
    {
        route : "CustomCol",
        text : "Custom Column Size Grid"
    }
];

class MyTickets extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>My Tickets</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <Card style={styles.mb}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={logo}/>
                                <Body>
                                <Text>Ticket: 24 Day Pass</Text>
                                <Text note>Matt Winwood</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>
                            <Image
                                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                                source={cardImage}
                            />
                        </CardItem>

                        <CardItem style={{ paddingVertical: 0 }}>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up"/>
                                    <Text>20 Remaining</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>Last Used: 11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default MyTickets;
