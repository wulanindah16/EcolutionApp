import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase';

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            Alert.alert('Success', 'Registration successful', [
                { text: 'OK', onPress: () => navigation.navigate('Login') },
            ]);
        } catch (error) {
            setError(error.message);
            Alert.alert('Error', 'Registration failed', error.message, [{ text: 'OK' }]);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={styles.container} >
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Be part of</Text>
                <Text style={styles.headerText}>the Eco Enthusiasts</Text>
            </View>

            <Image
                source={require('../assets/logo.png')}
                style={styles.image}
            />

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#8f8f8f"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#8f8f8f"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#8f8f8f"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#8f8f8f"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <Button title="Register" color="#4CAF50" onPress={handleRegister} />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                    Have an account?{' '}
                    <Text
                        style={styles.loginLink}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width: '80%',
        alignItems: 'flex-start',
        marginTop: -80,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4CAF50',
        fontFamily: 'Roboto',
        lineHeight: 40,
    },
    image: {
        width: 120,
        height: 130,
        marginTop: 10,
        marginBottom: 10,
    },
    formContainer: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: '#4CAF50',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#4CAF50',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
    loginContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    loginText: {
        color: '#000',
    },
    loginLink: {
        color: '#4CAF50',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default Register;
