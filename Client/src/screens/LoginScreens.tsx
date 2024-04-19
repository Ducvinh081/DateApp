import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaPhoneAlt } from 'react-icons/fa';
const LoginScreen: React.FC = () => {
  const [confirm, setConfirm] = useState(null);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý logic đăng nhập
  };

  return (
    <View style={styles.container}>
      <FaPhoneAlt size={30} />
      <Text>
        Welcome to ZigDate </Text>   
      <PhoneInput
        country={'vi'}
        value={this.state.phone}
        onChange={phone => this.setState({ phone })}
      />
      <Button
        title="Send OTP"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;