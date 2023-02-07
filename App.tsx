import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Login } from './src/screens/Login';

export default function App() {

  return (
    <NativeBaseProvider>
      <Login />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </NativeBaseProvider>
  );
}
