import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMediumText, AppText, Button } from '../components';

export const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('../../assets/images/intro-image-1.png')} />
                <AppMediumText style={styles.title}>WELCOME TO LAGOS STATE JUDICIARY CAUSE LIST PORTAL</AppMediumText>
                <AppText style={styles.subTitle}>
                    We provide automated case processing, payments and communication access to pertinent case-related
                    information.
                </AppText>
            </View>
            <View style={styles.actionBox}>
                <Button variant="secondary" label="LOGIN" onPress={() => navigation.navigate('Login')} />
                <Button label="REGISTER" style={{ marginTop: RFPercentage(3) }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
    },
    image: {
        marginTop: RFPercentage(4),
    },
    title: {
        width: '65%',
        textAlign: 'center',
        marginTop: RFPercentage(6),
        fontSize: RFPercentage(2.7),
        marginBottom: RFPercentage(4),
    },
    subTitle: {
        width: '85%',
        textAlign: 'center',
        fontSize: RFPercentage(2.2),
        lineHeight: RFPercentage(3),
    },
    actionBox: {
        marginTop: RFPercentage(6),
        marginHorizontal: RFPercentage(2),
    },
});
