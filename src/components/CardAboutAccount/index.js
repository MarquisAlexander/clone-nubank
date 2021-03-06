import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import { styles } from './styles';

export function CardAboutAccount({title, description, icon, value}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name={icon} size={24} color={colors.icon} />
                <Text style={styles.textTitle}>{title}</Text>
            </View>
                <Text style={styles.textDescription}>{description}</Text>
                <Text style={styles.textValue}>R$ {value}</Text>
        </View>
    )
}