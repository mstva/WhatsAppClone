import {createStackNavigator} from "@react-navigation/stack";
import {CallsParamList, CameraParamList, ChatsParamList, StatusParamList} from "../types";
import CameraScreen from "../screens/CameraScreen";
import ChatsScreen from "../screens/ChatsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
import * as React from "react";

const CameraStack = createStackNavigator<CameraParamList>();

export function CameraNavigator() {
    return (
        <CameraStack.Navigator>
            <CameraStack.Screen
                name="CameraScreen"
                component={CameraScreen}
                options={{ headerTitle: 'Camera Title' }}
            />
        </CameraStack.Navigator>
    );
}

const ChatsStack = createStackNavigator<ChatsParamList>();

export function ChatsNavigator() {
    return (
        <ChatsStack.Navigator>
            <ChatsStack.Screen
                name="ChatsScreen"
                component={ChatsScreen}
                options={{ headerTitle: 'Chats Title' }}
            />
        </ChatsStack.Navigator>
    );
}

const StatusStack = createStackNavigator<StatusParamList>();

export function StatusNavigator() {
    return (
        <StatusStack.Navigator>
            <StatusStack.Screen
                name="StatusScreen"
                component={StatusScreen}
                options={{ headerTitle: 'Status Title' }}
            />
        </StatusStack.Navigator>
    );
}

const CallsStack = createStackNavigator<CallsParamList>();

export function CallsNavigator() {
    return (
        <CallsStack.Navigator>
            <CallsStack.Screen
                name="CallsScreen"
                component={CallsScreen}
                options={{ headerTitle: 'Calls Title' }}
            />
        </CallsStack.Navigator>
    );
}
