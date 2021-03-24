import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: (height * 4) / 100,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderTopWidth: 1,
        flexDirection: 'row'
    },
})