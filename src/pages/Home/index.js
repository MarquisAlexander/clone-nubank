import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {CardAboutAccount} from '../../components/CardAboutAccount';
import {CardAboutCreditCard} from '../../components/CardAboutCreditCard';
import { CardRewards } from '../../components/CardRewards';
import { SmallCard } from '../../components/SmallCard';

import GlobalStyles from '../../styles/GlobalStyles';
import styles from './styles';

const data = {
    "info": [
    {"title": "Pix",
     "icon": "aperture"},
    {"title": "Pagar",
     "icon": "sidebar" },
    {"title": "Indicar amigos",
     "icon": "user-plus"},
    {"title": "Transferir", 
     "icon": "repeat"}
    ]}

function Home() {

    console.log(data.info);
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.textTitle}>Olá, </Text>
                    <Text style={styles.textTitle}>Marquis</Text>
                </View> 
                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                    <Icon name="eye-off" size={24} color="#fff" style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon name="settings" size={24} color="#fff" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                
                <CardAboutCreditCard
                    title={'Cartão de crédito'}
                    description={'Fatura atual'}
                    icon={'credit-card'}
                    value={'428,16'}
                />
                <CardAboutAccount
                    title={'Conta'}
                    description={'Saldo disponível'}
                    icon={'dollar-sign'}
                    value={'0,00'}
                />
                <CardRewards
                    title={'Rewards'}
                    description={'Apague compras com pontos que nunca expiram.'}
                    icon={'gift'}
                />

            </ScrollView>

            <FlatList
                data={data.info}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, data}) => (
                    <SmallCard 
                        title={item.title}
                        icon={item.icon}
                    />
                )}
            />
        </View>
    )
}

export default Home;