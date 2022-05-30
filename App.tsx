import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import customStyles from './styles/customStyles';

export default function App() {
  return (
    <SafeAreaView style={customStyles.AndroidSafeArea}>
        <View>
          <Text>Welcome</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
