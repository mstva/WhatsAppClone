import * as React from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import ChatListItem from "../components/ChatListItem";
import chatsRooms from "../data/ChatRooms";
import Colors from "../constants/Colors";

export default function ChatsScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={chatsRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.background,
        width: Dimensions.get("window").width
    },
});
