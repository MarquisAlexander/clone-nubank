import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export function SmallCard({ title, icon }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon name={icon} size={24} color="#fff" />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}