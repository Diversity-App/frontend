import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
// import Button from '../components/Button';
import { Navigation } from '../types';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
    navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
    <Background>
        <Logo />
        <Header>Let’s start</Header>
        <Paragraph>Let's go for the code !!</Paragraph>
        <Button color={'#0386D0'} mode="contained" onPress={() => navigation.navigate('HomeScreen')}>Logout</Button>
    </Background>
);

export default memo(Dashboard);
