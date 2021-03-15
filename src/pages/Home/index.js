import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import styles from './styles';

function Home() {
    return (
        <ScrollView style={GlobalStyles.container}>
            <View style={styles.header}>
                <Text>Olá</Text>
                <Text>Marquis</Text>
            </View>
        </ScrollView>
    )
}

export default Home;