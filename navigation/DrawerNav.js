import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import BottomNav from './BottomNav'; // Menggunakan BottomNav

const Drawer = createDrawerNavigator();

// Kustomisasi Sidebar
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Logo dan teks "Welcome to Ecolution" */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/logo.png')} // Path ke file logo Anda
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Welcome to Ecolution</Text>
      </View>
      {/* Menampilkan daftar item navigasi */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 250, // Mengatur lebar Drawer
        },
      }}
    >
      {/* Menggunakan BottomNav di dalam Drawer */}
      <Drawer.Screen name="Explore The App" component={BottomNav} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

// Gaya untuk header dengan logo dan teks
const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: 'center', // Logo dan teks berada di tengah
  },
  logo: {
    width: 80, // Lebar logo lebih kecil
    height: 80, // Tinggi logo lebih kecil
    marginBottom: 10,
  },
  welcomeText: {
    color: '#4CAF50', // Warna teks hijau
    fontSize: 16, // Ukuran teks lebih kecil
    fontWeight: 'bold',
    textAlign: 'center',
  },
});