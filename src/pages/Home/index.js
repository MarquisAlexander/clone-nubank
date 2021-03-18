import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {BigCard} from '../../components/BigCard';

import GlobalStyles from '../../styles/GlobalStyles';
import styles from './styles';

function Home() {
    return (
        <ScrollView style={GlobalStyles.container}>
            <View style={styles.header}>
                <Text>Olá</Text>
                <Text>Marquis</Text>
                <BigCard
                    title={'Cartão de crédito'}
                    description={'Fatura atual'}
                />
                <BigCard
                    title={'Conta'}
                    description={'Saldo disponível'}
                />
                <BigCard
                    title={'Rewards'}
                    description={'Apague compras com pontos que nunca expiram.'}
                />
            </View>
        </ScrollView>
    )
}

export default Home;