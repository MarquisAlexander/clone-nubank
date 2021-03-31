import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Keys} from '../../../components/Keys';
import {useNavigation} from '@react-navigation/native'

import colors from '../../../styles/colors';

import GlobalStyles from '../../../styles/GlobalStyles';
import styles from './styles';

function MyKeysPix() {

    const navigation = useNavigation();

    return (
        <View style={GlobalStyles.containerWhite}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='chevron-left' size={24} color={colors.icon} />
                </TouchableOpacity>
                <Icon name='help-circle' size={24} color={colors.icon} />
            </View>

        <Text style={styles.textTitle}>Minhas chaves</Text>
        <Text style={styles.textDescription}>Gerencie suas chaves para receber transferências pelo Pix.</Text>

        <TouchableOpacity style={styles.buttonCreateKey}>
            <Text style={styles.textButtonCreateKey}>Registrar chave</Text>
            <Icon name='plus' size={24} color={colors.purple} />
        </TouchableOpacity>

        <View style={{borderBottomWidth: 1, borderColor: '#f1f1f1'}}></View>

        <Text style={styles.text}>3 de 5 chaves</Text>
        <Keys
            icon={'shield'}
            TypeKey={'Chave aleatória'}
            Key={'453454750454950745454'}
        />
        <Keys
            icon={'shield'}
            TypeKey={'Chave aleatória'}
            Key={'453454750454950745454'}
        />
        <Keys
            icon={'mail'}
            TypeKey={'E-mail'}
            Key={'marquissantos123@gmail.com'}
        />
        </View>
    )
}

export default MyKeysPix;