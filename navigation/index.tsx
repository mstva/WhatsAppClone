import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Image, StyleSheet, Text, View} from 'react-native';
import {MaterialCommunityIcons, Octicons, FontAwesome} from "@expo/vector-icons";

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import TopTabNavigator from "./TopTabNavigator";
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import ChatRoomScreen from "../screens/ChatRoomScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

const rootRightIcons = () => ( <View style={styles.rootRightIconsContainer}>
    <Octicons name='search' size={22} color={'white'}/>
    <MaterialCommunityIcons name='dots-vertical' size={24} color={'white'}/>
</View> )

const chatRoomRightIcons = () => ( <View style={styles.chatRoomRightIconsContainer}>
    <FontAwesome name="video-camera" size={22} color="white" />
    <MaterialCommunityIcons name='phone' size={22} color={'white'}/>
    <MaterialCommunityIcons name='dots-vertical' size={24} color={'white'}/>
</View> )

function RootNavigator() {
    return <Stack.Navigator screenOptions={{headerStyle: styles.header, headerTintColor: Colors.light.background}}>
    <Stack.Screen name="Root" component={TopTabNavigator} options={{title: 'WhatsApp', headerRight: rootRightIcons}}/>
    <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
            title:
                <View style={styles.imageContainer}>
                    <Image source={{ uri: route.params.image }} style={styles.avatar}/>
                    <Text style={styles.name}>{route.params.name}</Text>
                </View>,
            headerRight: chatRoomRightIcons
        })}
    />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
  </Stack.Navigator>;
}

const styles = StyleSheet.create({
    rootRightIconsContainer: {
        flexDirection: 'row',
        width: 60,
        justifyContent: 'space-between',
        marginRight: 10
    },
    chatRoomRightIconsContainer: {
        flexDirection: 'row',
        width: 90,
        justifyContent: 'space-between',
        marginRight: 10
    },
    header: {
        backgroundColor: Colors.light.tint,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginEnd: 15
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    name: {}
})
