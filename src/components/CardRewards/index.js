import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import { styles } from './styles';

export function CardRewards({title, description, icon, value}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerIcons}>
                    <Icon name={icon} size={24} color="#fff" style={styles.icon}/>
                </View>
                <Text style={styles.textTitle}>{title}</Text>
            </View>
                <Text style={styles.textDescription}>{description}</Text>
                <TouchableOpacity style={styles.containerButton}>
                    <Text style={styles.textButton}>CONHECER</Text>
                </TouchableOpacity>
        </View>
    )
}