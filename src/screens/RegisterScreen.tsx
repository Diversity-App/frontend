import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import { emailValidator, passwordValidator, nameValidator } from '../core/utils';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-paper';

type Props = {
    navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [cont, setCont] = useState('');

    const _onSignUpPressed = () => {
        const nameError = nameValidator(name.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        navigation.navigate('Dashboard');
    };

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('HomeScreen')} />

            <Logo />

            <Header>Create Account</Header>

            <Input
                placeholder="Username"
                inputStyle={{ color: 'white' }}
                onChangeText={(text) => setName({ value: text, error: 'error' })}
            />

            <Input
                placeholder="Mail"
                inputStyle={{ color: 'white' }}
                onChangeText={(text) => setEmail({ value: text, error: 'error' })}
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
});

export default memo(RegisterScreen);
