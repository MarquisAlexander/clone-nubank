import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Button} from '../../components/Button';

import GlobalStyles from '../../styles/GlobalStyles';
import styles from './styles'

function Profile({navigation}) {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.header}>
                <Text style={styles.textTitle}>Olá, Maquis</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="x" size={24} color="#fff" style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Button />
            <Button />
            <Button />
            <Button />
        </View>
    )
}

export default Profile;