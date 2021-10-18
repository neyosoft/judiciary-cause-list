import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <GestureHandlerRootView>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <NavigationContainer>
                    <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                        <Header />
                    </ScrollView>
                </NavigationContainer>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
};

export default App;
