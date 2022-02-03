import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={tw`flex justify-center items-center flex-1`}>
      <Text style={tw`bg-pink-500 text-white p-6 rounded-full text-lg font-bold`}>We got tailwind!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
