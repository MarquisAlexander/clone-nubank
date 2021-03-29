import { StyleSheet } from 'react-native';

import colors from '../styles/colors';

const GlobalStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        paddingHorizontal: 15,
        flex: 1,
    },

    containerWhite: {
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        flex: 1,
    }
})

export default GlobalStyles;