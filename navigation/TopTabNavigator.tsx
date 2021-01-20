import {Fontisto} from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {MainTabParamList} from '../types';
import {CameraNavigator, ChatsNavigator, StatusNavigator, CallsNavigator} from "./StackNavigator";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function TopTabNavigator() {
    const colorScheme = useColorScheme();
    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].background,
                style: {backgroundColor: Colors[colorScheme].tint},
                indicatorStyle: {backgroundColor: Colors[colorScheme].background, height: 4},
                labelStyle: {fontWeight: 'bold'},
                showIcon: true
            }}>
            <MainTab.Screen
                name="Camera"
                component={CameraNavigator}
                options={{
                    tabBarIcon: ({color}) => <Fontisto name="camera" color={color} size={20}/>,
                    tabBarLabel: () => null
                }}/>
            <MainTab.Screen name="Chats" component={ChatsNavigator}/>
            <MainTab.Screen name="Status" component={StatusNavigator}/>
            <MainTab.Screen name="Calls" component={CallsNavigator}/>
        </MainTab.Navigator>
    );
}
