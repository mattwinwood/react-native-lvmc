const React = require("react-native");
const {Dimensions, Platform} = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    imageContainer : {
        flex : 1,
        width : null,
        height : null
    },
    logoContainer : {
        flex : 1,
        marginTop : deviceHeight / 8,
        marginBottom : 30
    },
    logo : {
        position : "absolute",
        left : Platform.OS === "android" ? 40 : 25,
        top : Platform.OS === "android" ? 100 : 150,
        width : 325,
        height : 65
    },
    text : {
        color : "#D8D8D8",
        fontWeight : "100",
        fontSize : 16,
        marginTop : 5,
        opacity: 0.5

    }
};
