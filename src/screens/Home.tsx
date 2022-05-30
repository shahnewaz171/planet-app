import React from 'react';
import { SafeAreaView, View } from 'react-native';
import PlanetHeader from '../components/text/PlanetHeader/PlanetHeader';
import Text from '../components/text/text';
import customStyles from '../styles/customStyles';

const Home = () => {
    
    return (
        <SafeAreaView style={customStyles.AndroidSafeArea}>
            <PlanetHeader />
        </SafeAreaView>
    );
};

export default Home;