import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/Login/layout';

const RouteStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RouteStack.Navigator initialRouteName='Login'>
        <RouteStack.Screen name="Login" component={Login} options={{ headerShown: false}} />
      </RouteStack.Navigator>
    </NavigationContainer>
  );
}

