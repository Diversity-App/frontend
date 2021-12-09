import React, { memo } from 'react';
import Background from '../components/Background';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Button from '../components/Button';
// import {FloatingLabelInput} from 'react-native-floating-label-input';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
    navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
    <Background>
        <Logo />
        <Header>Diversity</Header>

        <Paragraph>Ouvrez vous a de nouveaux horizons médiatiques.</Paragraph>
        <Button title="Login" onPress={() => navigation.navigate('LoginScreen')} />
        <Button
            //   bordered
            title="Sign Up"
            onPress={() => navigation.navigate('RegisterScreen')}
        />
    </Background>
);

export default memo(HomeScreen);
