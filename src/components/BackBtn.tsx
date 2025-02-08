import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import useNavigationHelper from '../hooks/useNavigate';

const BackBtn = () => {
    const { goBack } = useNavigationHelper();
    return (
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
            <Icon name='swapleft' size={30} style={{ margin: 'auto' }} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backBtn: {
        backgroundColor: '#D3AF11',
        borderColor: '#C79500',
        height: 40,
        width: 50,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 5,
    }
});

export default BackBtn;
