import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from '../theme/colors';

export default StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        backgroundColor: colors.black
    }
});