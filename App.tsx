import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/screens/Home';
import LetsStarted from './src/screens/LetsStarted';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LetsStarted' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} options={{ animation: 'slide_from_left' }} />
        <Stack.Screen name='LetsStarted' component={LetsStarted} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App