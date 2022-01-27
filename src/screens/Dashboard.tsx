import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
// import Button from '../components/Button';
import { Navigation } from '../types';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type Props = {
    navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
    const connectGoogle = () => {
        console.log('linking spotify');
    };

    const percent = Math.round(Math.random() * 100);

    return (
        <Background>
            <Header>Here is your score</Header>
            <AnimatedCircularProgress
                size={250}
                rotation={0}
                width={8}
                fill={percent}
                tintColor="#00e0ff"
                children={(e) => <Text adjustsFontSizeToFit>{e}%</Text>}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
            />
            {/*<Button color={'#0386D0'} mode="contained" onPress={() => connectGoogle()}>
                Connect to Youtube
    </Button>*/}
            <Button style={{ margin: 25 }} color={'#0386D0'} mode="contained" onPress={() => navigation.navigate('HomeScreen')}>
                Logout
            </Button>
        </Background>
    );
};

export default memo(Dashboard);
