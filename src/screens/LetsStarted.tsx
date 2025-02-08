import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomBtn from '../components/CustomBtn';
import useNavigationHelper from '../hooks/useNavigate';
import TravelLogin from '../svg/travel_login';



const LetsStarted = () => {
    const { navigateTo } = useNavigationHelper();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.start}>Let's Get Started!</Text>

            <TravelLogin />

            <View style={{ paddingTop: '30%' }}>
                <CustomBtn backgroundColor='#19a47f' textStyle={styles.sign_up} title='SIGN UP' onPress={() => navigateTo('SignUp')} />

                <View style={styles.account}>
                    <Text style={styles.alr_account}>Already have an account?</Text>
                    <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigateTo('Login')}>
                        <Text style={styles.login}>Log in</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default LetsStarted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#76C7A9'
    },
    start: {
        fontWeight: 'bold',
        fontSize: 42,
        paddingBottom: '20%'
    },
    sign_up: {
        fontWeight: 'bold',
        color: '#212121',
    },
    account: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 15
    },
    login: {
        fontSize: 20,
        fontWeight: '500',
        color: '#19a47f',
    },
    alr_account: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black'
    }
});
