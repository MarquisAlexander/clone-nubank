import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: (height * 27) / 100,
        width: '100%',
        borderRadius: 3,
        marginBottom: 15,
        padding: 15,

        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        backgroundColor: colors.purpleLight,
        padding: 10,
        marginLeft: 10,
        borderRadius: 50,
    },

    textTitle: {
        marginLeft: 10,
        color: colors.purple,
        fontSize: (width * 6) / 100,
        fontFamily: 'Roboto-Regular',
    },

    textDescription: {
        color: colors.textTitle,
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

    containerButton: {
        borderStyle: 'solid' ,
        borderColor: colors.purple,
        borderWidth: 1,
        borderRadius: 5,

        padding: 15,

        maxWidth: 100,

        // marginTop: (height * 3) / 100
    },

    textButton: {
        color: colors.purple,
        fontFamily: 'Roboto-Bold'
    }
})