import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Header;
