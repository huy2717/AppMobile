import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import NavigationContainer from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
