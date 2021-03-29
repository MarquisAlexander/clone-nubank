import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // height: (height * 30) / 100,
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
        marginLeft: 15,
        color: colors.textTitle,
        fontSize: (width * 4.5) / 100,
        fontFamily: 'Roboto-Light',
    },

    textDescription: {
        color: colors.textBlack,
        fontSize: (width * 4) / 100,
        fontFamily: 'Roboto-Regular',
        marginTop: (height * 3) / 100
    },

    textInfo: {
        color: colors.textTitle,
        fontSize: (width * 4) / 100,
        fontFamily: 'Roboto-Regular',
        color: colors.textBlack
    },

    textValue: {
        marginTop: (height * 3) / 100,
        fontSize: (width * 8) / 100,
        color: colors.textBlue,
        fontFamily: 'Roboto-Bold'
    },

    textInfoValue: {
        fontSize: (width * 4) / 100,
        color: colors.green,
        fontFamily: 'Roboto-Bold'
    }
})