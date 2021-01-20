import React from "react";
import {FlatList, ImageBackground, StyleSheet} from "react-native";
import {useRoute} from '@react-navigation/native'
import Colors from "../constants/Colors";
import ChatMessage from "../components/ChatMessage";
import chatRoomData from "../data/Chats";
import InputMessage from "../components/InputMessage";


const ChatRoomScreen = () => {
    const route = useRoute()
    const imageBackground = 'https://raw.githubusercontent.com/Savinvadim1312/WhatsappClone/main/assets/images/BG.png'
    return (
        <ImageBackground style={styles.imageBackground} source={{uri: imageBackground}}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
            />
            <InputMessage/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.background
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    }
});

export default ChatRoomScreen
