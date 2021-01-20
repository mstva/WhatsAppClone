import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: "row",
        margin: 10,
        alignItems: "flex-end"
    },
    leftContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.light.background,
        borderRadius: 25,
        alignItems: "flex-end",
        paddingEnd: 15,
        paddingStart: 5,
        paddingVertical: 10,
        marginEnd: 10,
    },
    rightContainer: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: Colors.light.tint,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        marginStart: 10
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 5
    }
})

export default styles
