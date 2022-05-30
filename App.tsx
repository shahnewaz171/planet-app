import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import customStyles from './styles/customStyles';
import { color } from './theme/color';
import { Props } from './theme/model/types';

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
        <View style={{ backgroundColor: color.lightGreen, paddingVertical: 10 }}>
          <Text style={{ fontWeight: '600', textAlign: 'center', fontSize: 22, color: color.white }}>Welcome</Text>
          <StatusBar style='auto' />
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
