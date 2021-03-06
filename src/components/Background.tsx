import React, { memo } from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { theme } from '../core/theme';

type Props = {
    children: React.ReactNode;
};

const Background: React.FC<Props> = ({ children }: Props) => (
    <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {children}
        </KeyboardAvoidingView>
    </View>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    },
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(Background);
