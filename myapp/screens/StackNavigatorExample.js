/* //import React from 'react';
import { View, Text } from 'react-native';
import { create } from 'react-test-renderer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen'

const Stack = createMaterialBottomTabNavigator();

const StackNavigatorExample = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='LoginScreen'
            activeColor='white'
            inactiveColor='yellow'
            labeled={false} >
                <Stack.Screen 
                name='HomeScreen'
                component={HomeScreen} />
                <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{title:'Đăng nhập', headerShown: false}} />
                <Stack.Screen 
                name='RegisterScreen'
                component={RegisterScreen}
                options={{
                    title:'Đăng kí',
                    
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigatorExample; */
