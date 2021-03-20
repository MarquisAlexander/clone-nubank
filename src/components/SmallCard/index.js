import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export function SmallCard() {
    return (
        <View style={styles.container}>
            <Icon name="arrow-left" size={24} color="#fff" />
            <Text style={styles.text}>Ola mundo</Text>
        </View>
    )
}