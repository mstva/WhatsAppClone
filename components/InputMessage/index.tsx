import React, {useState} from "react";
import {TextInput, View} from "react-native";
import styles from "./style";
import {Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";


const InputMessage = () => {

    const [message, setMessage] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <FontAwesome5 name="smile" size={24} color="black" style={styles.icon}/>
                <TextInput
                    placeholder={'type a message'}
                    style={styles.input} multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <MaterialIcons name="attach-file" size={24} color="black" style={styles.icon}/>
                {!message && <Entypo name="camera" size={24} color="black" style={styles.icon}/>}
            </View>
            <View style={styles.rightContainer}>
                {!message
                    ? <MaterialCommunityIcons name='microphone' size={28} color='white'/>
                    : <MaterialIcons name='send' size={25} color='white'/>
                }
            </View>
        </View>
    )
}

export default InputMessage
