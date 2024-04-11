import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  return(
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Login!</Text>
    </View>
  );
}
export default Login;
