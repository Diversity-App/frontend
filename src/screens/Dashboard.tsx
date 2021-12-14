import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
// import Button from '../components/Button';
import { Navigation } from '../types';
import { TouchableOpacity, StyleSheet, Text, View, Button, ScrollView, StatusBar } from 'react-native';
import PieChart from 'react-native-pie-chart';

type Props = {
    navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
    const widthAndHeight = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']

    return (
        <Background>
        <ScrollView style={{display: 'flex', marginTop: 450 }}>
            <View style={styles.container}>
                <Text style={{color: 'white', fontSize: 40}}>Statistique</Text>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                />
            </View>
        </ScrollView></Background>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        margin: 10
    }
});

export default memo(Dashboard);
