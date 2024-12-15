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
            // Menampilkan alert ketika login berhasil
            Alert.alert('Success', 'Login successful!', [
                { text: 'OK', onPress: () => navigation.replace('Main') },
            ]);
        } catch (error) {
            setError(error.message);
            // Menampilkan alert ketika login gagal
            Alert.alert('Error', error.message, [{ text: 'OK' }]);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')} // Ganti dengan path gambar latar belakang Anda
            style={styles.container} // Mengatur gaya untuk latar belakang
        >
            {/* Header dengan teks "Welcome" dan "Back" terpisah */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Hello,</Text>
                <Text style={styles.headerText}>Eco Heroes!</Text>
            </View>

            {/* Gambar Logo */}
            <Image
                source={require('../assets/logo.png')} // Ganti dengan path gambar Anda
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

            {/* Tombol Register berada di bawah login */}
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
        alignItems: 'flex-start', // Menyusun teks ke kiri
        marginBottom: 15,
        marginTop: -70, // Mengurangi margin bawah agar lebih dekat dengan gambar logo
    },
    headerText: {
        fontSize: 40, // Ukuran font lebih besar
        fontWeight: 'bold', // Membuat teks menjadi bold
        color: '#4CAF50', // Warna hijau yang serasi
        fontFamily: 'Roboto', // Pilih font yang sesuai
        lineHeight: 40, // Menambahkan jarak antar baris
    },
    image: {
        width: 120, // Ukuran gambar logo yang lebih kecil
        height: 130, // Ukuran gambar logo yang lebih kecil
        marginTop: -10, // Mengurangi margin top untuk memindahkan logo lebih ke atas
        marginBottom: 10, // Mengurangi jarak antara gambar logo dan form input
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
        elevation: 5, // Untuk efek bayangan di Android
    },
    input: {
        height: 40,
        borderColor: '#4CAF50',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#4CAF50', // Warna teks
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
    registerContainer: {
        marginTop: 10,  // Menambahkan jarak antara form dan tombol register
        padding: 10,
    },
    registerText: {
        textAlign: 'center',
        color: '#000',
    },
    registerLink: {
        color: '#4CAF50', // Warna teks link
        fontWeight: 'bold',
        textDecorationLine: 'underline', // Membuat teks lebih menonjol
    },
});

export default Login;
