import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import BackBtn from '../components/BackBtn'
import CustomBtn from '../components/CustomBtn'
import CustomTextInput from '../components/CustomTextInput'

const loginImg = require("../../assets/login.png")

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <BackBtn />
                <Image source={loginImg} resizeMode='contain' style={styles.image} />
            </SafeAreaView>
            <View style={styles.login}>
                <View style={styles.formContainer}>
                    <CustomTextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />

                    <CustomTextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                </View>

                <View style={styles.forgotContainer}>
                    <CustomBtn
                        title='Forgot password?'
                        onPress={() => { }}
                        style={styles.forgot_pw}
                        textStyle={styles.forgot_pwtext}
                    />
                </View>

                <CustomBtn
                    title='SIGN IN'
                    backgroundColor='#19a47f'
                    onPress={() => { }}
                    style={styles.sign_in}
                    textStyle={styles.sign_in_text}
                />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19a47f'
    },
    login: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    image: {
        height: 250,
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 'auto'
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    forgotContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 34
    },
    forgot_pw: {
        paddingHorizontal: 0,
        paddingVertical: 5,
        borderRadius: 0,
        backgroundColor: 'transparent',
        height: 45
    },
    forgot_pwtext: {
        fontSize: 16,
        justifyContent: 'flex-end'
    },
    sign_in: {
        marginHorizontal: 30,
        color: '#212121',
    },
    sign_in_text: {
        fontWeight: 'bold',
    }
})
