import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => <Image source={require('../assets/logo_bis.png')} style={styles.image} />;

const styles = StyleSheet.create({
    image: {
        width: 175,
        height: 194,
    },
});

export default memo(Logo);
