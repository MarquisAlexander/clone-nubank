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
                />
                <BigCard
                    title={'Conta'}
                />
                <BigCard
                    title={'Rewards'}
                />
            </View>
        </ScrollView>
    )
}

export default Home;