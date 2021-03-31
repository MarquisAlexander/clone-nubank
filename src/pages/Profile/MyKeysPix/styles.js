import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../styles/colors'

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 15,
    },

    buttonCreateKey: {
        flexDirection: 'row',
        paddingVertical: 25,
        justifyContent: 'space-between',
        marginTop: 30,
    }, 

    textButtonCreateKey: {
        color:colors.purple,
        fontFamily: 'Roboto-Bold',
        fontSize: (width * 4) / 100,
    },

    textTitle: {
        fontSize: (width * 10) / 100,
        fontFamily: 'Roboto-Medium'
    },

    textDescription: {
        color: colors.textBlack,
        fontSize: (width * 4) / 100,
        fontFamily: 'Roboto-Regular',
        marginTop: (height * 3) / 100
    }, 

    text: {
        marginVertical: 30,
        color: colors.textBase,
        fontSize: (width * 4) / 100,
        fontFamily: 'Roboto-Regular',
        // marginTop: (height * 3) / 100
    }
});

export default styles;