import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

export function BigCard({title}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="award" size={24} color='#000' />
                <Text>{title}</Text>
            </View>
        </View>
    )
}