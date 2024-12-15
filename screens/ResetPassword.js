import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';

const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your email for reset instructions.');
      setError('');
    } catch (error) {
      setError(error.message);
      setMessage('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />

      {message ? (
        <Text style={{ color: 'green', marginTop: 10 }}>{message}</Text>
      ) : null}

      {error ? (
        <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>
      ) : null}

      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default ResetPassword;
