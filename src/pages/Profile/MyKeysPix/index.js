import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Keys from '../../../components/Keys';

import colors from '../../../styles/colors';

import GlobalStyles from '../../../styles/GlobalStyles';
import styles from './styles';

function MyKeysPix() {
    return (
        <View style={GlobalStyles.containerWhite}>
            <View style={styles.header}>
                <Icon name='chevron-left' size={24} color={colors.icon} />
                <Icon name='help-circle' size={24} color={colors.icon} />
            </View>

        <Text style={styles.textTitle}>Minhas chaves</Text>
        <Text style={styles.textDescription}>Gerencie suas chaves para receber transferências pelo Pix.</Text>

        <TouchableOpacity style={styles.buttonCreateKey}>
            <Text style={styles.textButtonCreateKey}>Registrar chave</Text>
            <Icon name='plus' size={24} color={colors.purple} />
        </TouchableOpacity>

        <Text style={styles.text}>3 de 5 chaves</Text>
        <Keys />
        </View>
    )
}

export default MyKeysPix;