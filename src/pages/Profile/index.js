import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Button} from '../../components/Button';

import GlobalStyles from '../../styles/GlobalStyles';
import styles from './styles'

function Profile({navigation}) {
    return (
        <ScrollView 
            style={GlobalStyles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Text style={styles.textTitle}>Olá, Maquis</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="x" size={24} color="#fff" style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <View style={styles.BoxQrCode}>
                <View style={styles.QrCode}>
                </View>
                <Text style={styles.textInfoAcc}>Agência 0001 Conta 84893232-7 Banco 260 - Nu Pagamentos S.A</Text>
            </View>

            <Button
                icon={'help-circle'}
                title={'Me ajuda'}
            />
            <Button
                icon={'user'}
                title={'Perfil'}
            />
            <Button
                icon={'dollar-sign'}
                title={'Configurar conta'}
            />
            <Button
                icon={'aperture'}
                title={'Minhas chavex Pix'}
            />
            <Button
                icon={'credit-card'}
                title={'Configurar Cartão'}
            />
            <Button
                icon={'shopping-cart'}
                title={'Pedir conta PJ'}
            />
            <Button
                icon={'mail'}
                title={'Configurar notificações'}
            />
            <Button
                icon={'smartphone'}
                title={'Configurações do app'}
            />
            <Button
                icon={'help-circle'}
                title={'Sobre'}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>SAIR DO APP</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Profile;