import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigateFunction } from 'react-router-native';


interface Props {
  
  changeLanguage: (language: string) => void; 
}

const WelcomeScreen: React.FC<Props> = ({ changeLanguage }) => {
  return (
    <View>
      <Button title="Login"  />
      <Button title="Signup" />
      {/* Add other navigation buttons here */}
    </View>
  );
}

export default WelcomeScreen;
