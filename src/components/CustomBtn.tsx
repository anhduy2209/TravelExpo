import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type CustomBtnProps = {
    onPress: () => void;
    title: string;
    style?: object;
    textStyle?: object;
    backgroundColor?: string;
};

const CustomBtn: React.FC<CustomBtnProps> = ({ onPress, title, style, textStyle, backgroundColor }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor || '#add8e6' }, style]}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: '33%',
        paddingVertical: '5%',
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'semibold',
        textAlign: 'center',
    },
});

export default CustomBtn;
