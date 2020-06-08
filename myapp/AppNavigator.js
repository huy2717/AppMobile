import React from 'react';
import { View, Text } from 'react-native';
import { create } from 'react-test-renderer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import TabNavigator from './TabNavigator'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
//import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator();

const StackNavigatorExample = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='LoginScreen'
             >
                {/* <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen} /> */}
                <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{title:'Đăng nhập', headerShown: false}} 
                />
                <Stack.Screen 
                name='RegisterScreen'
                component={RegisterScreen}
                options={{title:'Đăng kí', headerShown:true,}} 
                />
                <Stack.Screen
                name='TabNavigator'
                component={TabNavigator}
                options={{headerShown: false}}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigatorExample;
