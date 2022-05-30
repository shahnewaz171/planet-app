import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Props } from './src/model/types';
import Text from './src/components/text/text';
import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import customStyles from './src/styles/customStyles';

const Stack = createNativeStackNavigator();

const App: React.FC<any> = () => {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>
  }

  return (
    <View style={customStyles.container}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        <StatusBar style='dark' />
      </NavigationContainer>
    </View>
  );
}

export default App;