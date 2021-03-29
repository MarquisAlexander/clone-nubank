import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // height: (height * 25) / 100,
        width: '100%',
        borderRadius: 3,
        marginBottom: 15,
        padding: 15,
        justifyContent: 'space-between',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textTitle: {
        marginLeft: 10,
        color: colors.textTitle,
        fontSize: (width * 4.5) / 100,
        fontFamily: 'Roboto-Light',
    },

    textDescription: {
        color: colors.textBase,
        fontSize: (width * 4) / 100,
        fontFamily: 'Roboto-Light',
        marginTop: (height * 3) / 100
    },

        textValue: {
        marginTop: (height * 3) / 100,
        fontSize: (width * 8) / 100,
        color: colors.textBlack,
        fontFamily: 'Roboto-Bold'
    },
})