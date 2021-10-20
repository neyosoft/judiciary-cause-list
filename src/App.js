import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavigation from './navigation';
import { StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={styles.root}>
                <AppNavigation />
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default App;
