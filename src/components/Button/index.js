import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import { styles } from './styles';

export function Button({title, description, icon, value}) {
    return (
        <View style={styles.container}>
            <Icon name="x" size={24} color="#fff" />
            <Text style={{marginLeft: 10}}>Button</Text>
        </View>
    )
}