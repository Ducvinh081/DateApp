import React, { useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native';
import { auth } from "../../FirebaseConfig"; // Assuming this is correctly configured
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const fb_auth = auth;
const navigation:any = useNavigation();
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(fb_auth, email, password);
            console.log(response);
            navigation.navigate("HomeTabs");
        } catch (error:any) {
            console.log(error);
            Alert.alert('Sign In Failed: ' + error.nativeErrorMessage);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(fb_auth, email, password);
            console.log(response);
        } catch (error:any) {
            console.log(error);
            Alert.alert('Sign Up Failed: ' + error.nativeErrorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View className="flex-1 justify-center items-center p-5">
            <KeyboardAvoidingView behavior="padding">
                <TextInput
                    value={email}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                    className="bg-white border border-gray-300 rounded-md px-4 py-2 mb-4 w-[300px]"
                />
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                    className="bg-white border border-gray-300 rounded-md px-4 py-2 mb-4 w-[300px]"
                />
                {loading ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <>
                        <Button title="Login" onPress={signIn} />
                        <Button title="Create account" onPress={signUp} />
                    </>
                }
            </KeyboardAvoidingView>
        </View>
    )
};

export default LoginScreen;