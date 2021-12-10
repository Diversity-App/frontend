import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import { passwordValidator, nameValidator } from '../core/utils';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

type Props = {
    navigation: Navigation;
};

type AppProps = {
    index: number;
    symbol: string;
    isFocused: boolean;
};

const RegisterScreen = ({ navigation }: Props) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [cont, setCont] = useState('');
    const CELL_COUNT = 5;
    const [enableMask, setEnableMask] = useState(true);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const _onSignUpPressed = () => {
        const nameError = nameValidator(name.value);
        const passwordError = passwordValidator(password.value);

        if (passwordError || nameError) {
            setName({ ...name, error: nameError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        navigation.navigate('Dashboard');
    };
    const toggleMask = () => setEnableMask((f) => !f);

    const renderCell = ({ index, symbol, isFocused }: AppProps) => {
        let textChild = null;

        if (symbol) {
            textChild = enableMask ? '•' : symbol;
        } else if (isFocused) {
            textChild = <Cursor />;
        }
        return (
            <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {textChild}
            </Text>
        );
    };

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('HomeScreen')} />

            <Logo />

            <Header>Create Account</Header>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
            />
            <Button color={'#0386D0'} mode="contained" style={{ margin: 10 }} onPress={toggleMask}>
                {enableMask ? 'View Code' : 'Hide code'}
            </Button>

            <Input
                placeholder="Username"
                inputStyle={{ color: 'white' }}
                onChangeText={(text) => setName({ value: text, error: 'error' })}
            />

            <Input
                placeholder="Password"
                secureTextEntry={true}
                inputStyle={{ color: 'white' }}
                onChangeText={(text) => setPassword({ value: text, error: 'error' })}
            />

            <Button color={'#0386D0'} mode="contained" onPress={_onSignUpPressed}>
                Sign Up
            </Button>

            <View style={styles.row}>
                <Text style={styles.label}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    label: {
        color: theme.colors.secondary,
    },
    button: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    root: { padding: 20, minHeight: 300 },
    title: { textAlign: 'center', fontSize: 30 },
    fieldRow: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 8,
    },
    cell: {
        width: 55,
        height: 55,
        lineHeight: 55,
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        marginLeft: 8,
        borderRadius: 26,
        backgroundColor: '#eee',
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default memo(RegisterScreen);
