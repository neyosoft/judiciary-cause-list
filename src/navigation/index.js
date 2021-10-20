import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import IntroNavigation from './intro';

const appNavigation = () => {
    return (
        <NavigationContainer>
            <IntroNavigation />
        </NavigationContainer>
    );
};

export default appNavigation;
