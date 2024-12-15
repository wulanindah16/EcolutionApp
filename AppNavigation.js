import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'; // Halaman Login
import Register from './screens/Register'; // Halaman Register
import DrawerNav from './navigation/DrawerNav'; // Navigasi utama (berisi Home)

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Main" component={DrawerNav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };  

export default AppNavigation;
