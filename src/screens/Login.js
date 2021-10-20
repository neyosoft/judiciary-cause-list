import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMediumText, AppText, Button } from '../components';

export const Login = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View>
                <AppText>Back</AppText>
            </View>
            <ScrollView style={styles.scrollview} contentContainerStyle={styles.contentContainerStyle}>
                <Image style={styles.image} source={require('../../assets/images/logo.png')} />
                <AppMediumText style={styles.title}>Welcome back!</AppMediumText>
                <AppText style={styles.description}>Please, login to continue.</AppText>

                <Button label="LOGIN" style={{ marginTop: RFPercentage(3) }} />
                <View>
                    <AppText>Don't have an account? </AppText>
                    <AppText>REGISTER </AppText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollview: {
        flex: 1,
    },
    contentContainerStyle: {
        padding: RFPercentage(2),
    },
    image: {
        marginTop: RFPercentage(4),
    },
    title: {
        fontSize: RFPercentage(2.7),
    },
    description: {
        fontSize: RFPercentage(2),
    },
});
