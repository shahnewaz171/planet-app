import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import customStyles from './src/styles/customStyles';
import { colors } from './src/theme/colors';
import { Props } from './src/model/types';
import { typography } from './src/theme/typography';
import Text from './src/components/text/text';

const App: React.FC<Props> = () => {
  const [loaded] = useFonts({
    'Antonio-Medium' : require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold' : require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular' : require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>
  }

  return (
    <SafeAreaView style={customStyles.AndroidSafeArea}>
        <View style={{ backgroundColor: colors.lightGreen, paddingVertical: 10 }}>
          <Text preset="h1" style={{ color: 'yellow' }}>Welcome</Text>
        </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
