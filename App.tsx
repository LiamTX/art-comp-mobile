import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Drawer.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#8b5cf6'
            }
          }}
          
          initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      </NativeBaseProvider>
    </NavigationContainer>

  );
}
