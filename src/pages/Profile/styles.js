import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    // container: {
    //     paddingHorizontal: (height * 4) / 100,
    // },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: (height *5) / 100,
        alignItems: 'center',
    },

    textTitle: {
        color: colors.text,
        fontSize: (width * 8) / 100,
        fontFamily: 'Roboto-Bold'
    },

    icon: {
        backgroundColor: colors.purpleLight,
        padding: 10,
        marginLeft: 10,
        borderRadius: 50,
    },
})

export default styles;