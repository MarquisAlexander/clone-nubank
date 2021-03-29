import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    contente: {
        alignItems: 'center',
        height: (height * 9) / 100,
        // paddingHorizontal: 10,
        // paddingVertical: 25,
        flexDirection: 'row'
    },

    textTitle: {
        color: colors.text,
        marginLeft: 20,
        fontFamily: 'Roboto-Regular',
        fontSize: (height * 2) / 100,
    }
})