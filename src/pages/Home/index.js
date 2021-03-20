import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {BigCard} from '../../components/BigCard';
import {SmallCard} from '../../components/SmallCard';

import GlobalStyles from '../../styles/GlobalStyles';
import styles from './styles';

const data = [1,2,3,4]

function Home() {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.textTitle}>Olá, </Text>
                    <Text style={styles.textTitle}>Marquis</Text>
                </View> 
                <View style={styles.headerIcons}>
                    <Icon name="eye-off" size={24} color="#fff" style={styles.icon}/>
                    <Icon name="settings" size={24} color="#fff" style={styles.icon} />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                
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

            </ScrollView>

            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, data}) => (
                    <SmallCard />
                )}
            />
        </View>
    )
}

export default Home;