import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: Dimensions.get("window").width,
        justifyContent: "space-between",
        padding: 10,
    },
    leftContainer: {
        flexDirection: "row"
    },
    midContainer: {},
    rightContainer: {},
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15
    },
    username: {
        fontWeight: "bold",
        fontSize: 18,
    },
    lastMessage: {
        fontSize: 16,
        marginTop: 5,
        color: "grey"
    },
    time: {
        fontSize: 14,
        color: "grey",
        marginEnd: 10,
    }
})

export default styles
