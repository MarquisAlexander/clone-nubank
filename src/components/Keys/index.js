import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles';

function Keys() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Icon name='shield' size={24} color='#000' />
                <View>
                    <Text>Chave aleatória</Text>
                    <Text>64565754565645654745635</Text>
                </View>
            </View>
            <Icon name='more-vertical' size={24} color='#000' />
        </TouchableOpacity>
    )
}

export default Keys;