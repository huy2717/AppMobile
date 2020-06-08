import React from 'react'
import { View, Text, Button } from 'react-native'

const RegisterScreen = ({route, navigation}) => {
    return (
        <View
        style={{
            flex:1,
            backgroundColor:'green',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text>Register</Text>
            <Button 
            title='Go to Login'
            onPress={() => {
                navigation.navigate('LoginScreen');
            }} />
            
        </View>
    )
}

export default RegisterScreen
