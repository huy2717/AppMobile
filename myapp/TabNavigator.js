import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen'
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProductsScreen from './screens/ProductsScreen'

const Tab = createMaterialBottomTabNavigator ();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
            />
            <Tab.Screen
            name='NotificationScreen'
            component={NotificationScreen} 
            />
            <Tab.Screen
            name='ProfileScreen'
            component={ProfileScreen} />
            <Tab.Screen
            name='ProductsScreen'
            component={ProductsScreen} />
        </Tab.Navigator>
        
    )
}

export default TabNavigator
