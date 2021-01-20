import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    messageBox: {
        borderRadius: 15,
        padding: 10
    },
    username: {
        color: Colors.light.tint,
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5
    },
    message: {
        fontSize: 16,
    },
    time: {
        fontSize: 12,
        alignSelf: "flex-end",
        color: 'grey'
    },
})

export default styles
