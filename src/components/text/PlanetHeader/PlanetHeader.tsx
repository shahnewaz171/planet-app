import React from 'react';
import { StyleSheet, View } from 'react-native';
import { spacing } from '../../../theme/spacing';
import Text from '../text';

const PlanetHeader: React.FC<any> = () => {

    return (
        <View style={styles.container}>
            <Text preset="h2">The Planets</Text>
        </View>
    );
};

export default PlanetHeader;

const styles = StyleSheet.create({
    container: {
        padding: spacing[5]
    }
})