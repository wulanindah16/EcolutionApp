import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { auth } from '../config/firebase';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpeg')}
      style={styles.container} >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Your Journey Begins Here,</Text>
        <Text style={styles.headerText}>Glad to Have You as Part of Ecolution!</Text>
      </View>

      <Image
        source={require('../assets/avatar.png')}
        style={styles.avatar}
      />

      <View style={styles.profileContainer}>
        {user ? (
          <>
            <Text style={styles.userText}>Nama: {user.displayName}</Text>
            <Text style={styles.userText}>Email: {user.email}</Text>
            <Button title="Logout" color="#4CAF50" onPress={handleLogout} />
          </>
        ) : (
          <Text style={styles.loadingText}>Loading...</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4CAF50',
    fontFamily: 'Roboto',
    marginTop: 10,
    textAlign: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 20,
  },
  profileContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Efek bayangan di Androi
    alignItems: 'center',
    marginBottom: 30,
  },
  userText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    color: '#777',
    marginBottom: 10,
  },
});

export default Profile;
