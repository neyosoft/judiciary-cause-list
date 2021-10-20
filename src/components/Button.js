import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AppMediumText } from '.';

import theme from '../../theme';
import { AppText } from './AppText';

export const Button = ({ style, label, labelStyle, children, disabled, onPress, variant = 'primary', ...rest }) => {
    const buttonStyle = [styles.button, style];
    const buttonTextStyle = [styles.buttonText];

    switch (variant) {
        case 'primary': {
            buttonStyle.push(styles.primaryBtn);
            buttonTextStyle.push(styles.primaryBtnText);

            if (disabled) {
                buttonStyle.push(styles.disabledPrimaryBtn);
            }

            break;
        }
        case 'secondary': {
            buttonStyle.push(styles.secondaryBtn);
            buttonTextStyle.push(styles.secondaryBtnText);

            if (disabled) {
                buttonStyle.push(styles.disabledBtn);
                buttonTextStyle.push(styles.disabledBtnText);
            }

            break;
        }
    }

    buttonTextStyle.push(labelStyle);

    return (
        <RectButton onPress={disabled ? () => {} : onPress} testID="theButton" style={buttonStyle} {...rest}>
            {children ? children : <AppMediumText style={buttonTextStyle}>{label}</AppMediumText>}
        </RectButton>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.radius.label,
        paddingVertical: RFPercentage(2),
        paddingHorizontal: RFPercentage(10),
    },
    buttonText: {
        color: '#fff',
    },
    primaryBtn: {
        backgroundColor: theme.colors.primary,
    },
    primaryBtnText: {
        color: theme.colors.white,
    },
    disabledPrimaryBtn: {
        backgroundColor: theme.colors.diabledBtn,
    },
    secondaryBtn: {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    secondaryBtnText: {
        color: theme.colors.primary,
    },
    disabledBtn: {
        backgroundColor: theme.colors.diabledBtn,
    },
    disabledBtnText: {
        color: theme.colors.diabledBtnText,
    },
});
