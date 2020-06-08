import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create ({
    container: {
        flex:1
    },
    logoContainer: {
        flex: 4,
        backgroundColor: '#343C44',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        backgroundColor: '#FBB843',
        padding: 24,
        borderRadius: 99,
      },
      welcome: {
        alignItems: 'center',
      },
      welcomeText: {
        color: 'white',
        fontSize: 35 ,
        fontWeight: '700',
      },
      sloganText: {
        color: 'white',
        fontSize: 18,
      },
    loginContainer:{
        flex:3,
        backgroundColor:'#343C44',
        //backgroundColor:'yellow',
        paddingHorizontal: 50 ,
    },
    usernameContainer:{
        //backgroundColor:'red',
        height:55,
        flexDirection:'row',
    },
    iconContainer:{
        width:55,
        height:55,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2E3338',
        borderBottomLeftRadius: 7,
        borderTopLeftRadius:7,
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        height:55,
        paddingLeft:9,
        borderBottomRightRadius:7,
        borderTopRightRadius:7,
        alignContent:'center',
        backgroundColor: '#3E4750',
    },
    passwordContainer:{
        height:55,
        flexDirection:'row',
    },
    loginButtonContainer:{
        height:55,
        flexDirection:'row',
    },
    forgotContainer:{
        flex:4,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'yellow'
    },
    loginIconContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FBB843',
        borderRadius:9,
    },
    footerContainer:{
        height:100,
        paddingHorizontal:50,
        backgroundColor:'#343C44'
    },
    registerContainer:{
        flexDirection:'row',
        height:57,
    },
    registerText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3E4750',
        borderBottomLeftRadius:7,
        borderTopLeftRadius:7,
    },
    registerIcon:{
        height:57,
        width:57,
        backgroundColor:'#FBB843',
        borderBottomRightRadius:6,
        borderTopRightRadius:6,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.logoContainer}>
                    <View style={styles.logo}>
                        <EIcon name='baidu' size={70} style={{color:'#343C44'}} />
                    </View>
                    <View style={styles.welcome}>
                        <Text style={styles.welcomeText}>WELCOME</Text>
                        <Text style={styles.sloganText}>your homescreen app</Text>
                    </View>
                </View>


                <View style={styles.loginContainer}>
                    <View style={styles.usernameContainer}>
                        <View style={styles.iconContainer}>
                            <FAIcon name='user' size={25} style={{color:'white'}} />
                        </View>
                        <View style={styles.textContainer}>
                            <TextInput
                            //keyboardType
                            style={{color:'white', fontSize:18}}
                            autoCorrect={false}
                            placeholder='Username'
                            placeholderTextColor='#8C9299' ></TextInput>
                        </View>
                    </View>

                    <View style={{height:20}}></View>
                    <View style={styles.passwordContainer}>
                        <View style={styles.iconContainer}>
                            <FIcon name='locked' size={25} style={{color:'white'}} />
                        </View>
                        <View style={styles.textContainer}>
                        <TextInput //keyboardType
                            style={{color:'white', fontSize:18}}
                            autoCorrect={false}
                            placeholder='Password'
                            placeholderTextColor='#8C9299'
                            /* onChangeText={(text) => {
                                this.setState({password: text});
                            }} */ />
                        </View>
                    </View>

                    <View style={{height:25}}></View>
                    <View style={styles.loginButtonContainer}>
                        <TouchableOpacity style={styles.forgotContainer}>
                            <Text style={{color:'#888F97', fontSize:18,}}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.loginIconContainer}
                        onPress={() => {
                            this.props.navigation.navigate('TabNavigator');
                        }} >
                            <Text style={{color:'#dfe6e9', fontSize:18, fontWeight:'600'}}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <View style={{height:20}}></View>
                    <View style={styles.registerContainer}>
                    <View style={styles.registerText}>
                        <Text style={{color:'#dfe6e9', fontSize:18, fontWeight:'600'}}>REGISTER</Text>
                    </View>
                    <TouchableOpacity style={styles.registerIcon}
                    onPress={() => {
                        this.props.navigation.navigate('RegisterScreen')
                    }}>
                        <MCIcon name='chevron-double-right' size={35} style={{color:'white'}}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
