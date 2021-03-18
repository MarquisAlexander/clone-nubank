import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: (height * 27) / 100,
        width: '100%',
        borderRadius: 3,
        marginTop: 20,
        padding: 15,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textTitle: {
        marginLeft: 10,
        color: colors.textTitle,
        fontSize: (width * 6) / 100,
    },

    textDescription: {
        color: colors.textTitle,
        fontSize: (width * 4) / 100,
    },
})