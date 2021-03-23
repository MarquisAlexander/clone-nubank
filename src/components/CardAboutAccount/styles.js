import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: (height * 25) / 100,
        width: '100%',
        borderRadius: 3,
        marginBottom: 15,
        padding: 15,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textTitle: {
        marginLeft: 10,
        color: colors.textTitle,
        fontSize: (width * 5) / 100,
        fontFamily: 'Roboto-Regular',
    },

    textDescription: {
        color: colors.textBlack,
        fontSize: (width * 4) / 100,
        fontFamily: 'Roboto-Regular',
        marginTop: (height * 3) / 100
    },

        textValue: {
        marginTop: (height * 3) / 100,
        fontSize: (width * 8) / 100,
        color: colors.textBlack,
        fontFamily: 'Roboto-Bold'
    },
})