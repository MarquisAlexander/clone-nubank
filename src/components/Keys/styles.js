import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textNameKey: {
        color: colors.textBlack,
        fontFamily: 'Roboto-Bold',
        fontSize: (width * 4) / 100,
    },

    textKey: {
        marginTop: 8,
        color: colors.textBase,
        fontFamily: 'Roboto-Regular',
        fontSize: (width * 4) / 100,
    }
})

export default styles;