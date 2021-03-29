import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import GlobalStyles from '../../../styles/GlobalStyles';
import styles from './styles';

function MyKeysPix() {
    return (
        <View style={GlobalStyles.containerWhite}>
            <View style={styles.header}>
                <Icon name='x' size={24} color="#000" />
                <Icon name='x' size={24} color="#000" />
            </View>

        <Text>Minhas chaves</Text>
        <Text>Gerencie suas chaves para receber transferências</Text>
        </View>
    )
}

export default MyKeysPix;