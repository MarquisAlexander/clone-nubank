import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

export function BigCard({title, description}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="award" size={24} color='#000' />
                <Text style={styles.textTitle}>{title}</Text>
            </View>
                <Text style={styles.textDescription}>{description}</Text>
        </View>
    )
}