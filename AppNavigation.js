import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'; 
import Register from './screens/Register'; 
import DrawerNav from './navigation/DrawerNav'; 
import Maps from './screens/Maps'; 
import Places from './screens/Places';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={DrawerNav} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Places" component={Places} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
