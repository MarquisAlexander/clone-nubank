import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors'

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: (height * 15) / 100,
        width: (width * 30) / 100,
        backgroundColor: colors.purpleLight,
        borderRadius: 5,
        padding: 10,
        marginVertical: (height * 2) / 100,
        marginBottom: 40,
        marginRight: (width * 3) / 100,
        justifyContent: 'space-between',
    },

    text: {
        color: colors.text,
        fontFamily: 'Roboto-Regular'
    }
})