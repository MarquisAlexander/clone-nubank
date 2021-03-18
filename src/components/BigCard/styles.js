import {Dimensions, StyleSheet} from 'react-native';
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
    }
})