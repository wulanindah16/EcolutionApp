import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Success', 'Login successful!', [
                { text: 'OK', onPress: () => navigation.replace('Main') },
            ]);
        } catch (error) {
            setError(error.message);
            Alert.alert('Error', error.message, [{ text: 'OK' }]);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={styles.container} >
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Hello,</Text>
                <Text style={styles.headerText}>Eco Heroes!</Text>
            </View>
            <Image
                source={require('../assets/logo.png')}
                style={styles.image}
            />

            <View style={styles.formContainer}>
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
                <Button title="Login" color="#4CAF50" onPress={handleLogin} />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>

            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                    Don't have an account?
                    <Text
                        style={styles.registerLink}
                        onPress={() => navigation.navigate('Register')}
                    >
                        {' '}Register
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
        marginBottom: 15,
        marginTop: -70,
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4CAF50',
        fontFamily: 'Roboto',
        lineHeight: 40,
    },
    image: {
        width: 120,
        height: 130,
        marginTop: -10,
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
    registerContainer: {
        marginTop: 10,
        padding: 10,
    },
    registerText: {
        textAlign: 'center',
        color: '#000',
    },
    registerLink: {
        color: '#4CAF50',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default Login;
