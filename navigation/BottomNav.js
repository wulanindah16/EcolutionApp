import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Places from '../screens/Places';
import Maps from '../screens/Maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faMap, faStore } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#47663B',  // Warna aktif hijau
        tabBarInactiveTintColor: 'gray',  // Warna tidak aktif
        tabBarStyle: styles.tabBarStyle,  // Gaya tab bar
        headerShown: false,  // Menyembunyikan header
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} size={25} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Maps" 
        component={Maps} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faMap} size={25} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Places" 
        component={Places} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faStore} size={25} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 60,
  },
});

export default BottomNav;
