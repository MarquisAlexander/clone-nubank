import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.purple,

    },

    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    icon: {
        backgroundColor: colors.purpleLight,
        padding: 10,
        marginLeft: 10,
        borderRadius: 50,
    },

    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textTitle: {
        color: colors.text,
        fontSize: (width * 8) / 100,
        fontFamily: 'Roboto-Bold'
    }
});

export default styles;