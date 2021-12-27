import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Index from './screens/Index';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <RootStack.Navigator>
      <RootStack.Screen options={{headerShown: false}} name="Home" component={Home}/>
      <RootStack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <RootStack.Screen options={{headerShown: false }} name="Signup" component={Signup}/>
      <RootStack.Screen options={{headerShown: false }} name="Index" component={Index} />
      </RootStack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
}


