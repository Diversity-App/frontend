import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
// import Button from '../components/Button';
import { Navigation } from '../types';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

type Props = {
    navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
    <Background>
        <Logo />
        <Header>Let’s start</Header>
        <Paragraph>
            Let's go for the code !!
        </Paragraph>
        <Button title="Logout" onPress={() => navigation.navigate('HomeScreen')} />
    </Background>
);

export default memo(Dashboard);
