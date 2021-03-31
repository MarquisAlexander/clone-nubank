import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function Button({title, description, icon, value, onPress, nameScreen}) {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate(nameScreen)}
            style={styles.container}
        >
            <View style={styles.contente}>
                <Icon name={icon} size={24} color="#fff" />
                <Text style={styles.textTitle}>{title}</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#fff" />

        </TouchableOpacity>
    )
}