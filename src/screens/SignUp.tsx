import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomBtn from '../components/CustomBtn';
import CustomTextInput from '../components/CustomTextInput';
import useNavigationHelper from '../hooks/useNavigate';

const SignUp = () => {
    const { goBack, navigateTo } = useNavigationHelper();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        // You can add your sign-up logic here (e.g., API request to sign up the user)
        Alert.alert('Success', 'Sign up successful!');
    };
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goBack} style={{ justifyContent: 'flex-end' }}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <Text>CREATE AN ACCOUNT</Text>
                </View>
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

                <CustomTextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm your password"
                    secureTextEntry
                />

                <CustomBtn title='Sign Up' onPress={() => navigateTo('Login')} />
            </View>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row'
    }
})