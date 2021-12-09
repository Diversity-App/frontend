import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import { Input } from 'react-native-elements';

type Props = {
    navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        // if (emailError || passwordError) {
        //   setEmail({...email, error: emailError});
        //   setPassword({...password, error: passwordError});
        //   return;
        // }

        navigation.navigate('Dashboard');
    };

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('HomeScreen')} />
            <Logo />
            <Header>Welcome back.</Header>
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
            <Button title="Login" onPress={_onLoginPressed} />
            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

export default memo(LoginScreen);
