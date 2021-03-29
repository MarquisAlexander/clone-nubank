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

    BoxQrCode: {
        alignItems: 'center',
        marginTop: (height * 5) / 100,
    },

    QrCode: {
        backgroundColor: '#fff',
        height: 180,
        width: 180,
        borderRadius: 5,
    },

    textInfoAcc: {
        maxWidth: 250,
        marginVertical: 20,
        fontSize: (width * 4) / 100,
        color: colors.text,
        fontFamily: 'Roboto-Regular',
        fontSize: (height * 2.5) / 100,
        textAlign: "center",
    },

    button: {
        borderWidth: 1,
        borderColor: colors.text,
        borderRadius: 5,
        width: '100%',
        height: 50,
        marginBottom: 20,

        justifyContent: 'center',
    },
    
    textButton: {
        textAlign: "center",
        color: colors.text,
        fontFamily: 'Roboto-Bold',
    }
})

export default styles;