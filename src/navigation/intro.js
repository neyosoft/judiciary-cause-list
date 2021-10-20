import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';

const Stack = createStackNavigator();

export default function IntroNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
