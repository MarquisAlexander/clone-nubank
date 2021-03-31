import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles';

export function Keys({icon, TypeKey, Key}) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Icon name={icon} size={24} color='#000' />
                <View style={{marginLeft: 20,}}>
                    <Text style={styles.textNameKey}>{TypeKey}</Text>
                    <Text style={styles.textKey}>{Key}</Text>
                </View>
            </View>
            <Icon name='more-vertical' size={24} color='#000' />
        </TouchableOpacity>
    )
}

// export default Keys;