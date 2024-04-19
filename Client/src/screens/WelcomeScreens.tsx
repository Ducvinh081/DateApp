import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import WelcomeTerm from '../components/Welcome/index';
import CustomButton from '../components/Button/CustomButton';

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* First Container */}
      <View style={styles.firstContainer}>
        <Text style={styles.title}>Welcome to Tinder</Text>
        <Text style={styles.subTitle}>Please follow the house rules</Text>
      </View>

      {/* Second Container */}
      <View style={{ marginBottom: 15 }}>
        <WelcomeTerm
          title="Be yourself"
          subTitle="Make sure your photos, age and bio are true to who you are"
        />
        <WelcomeTerm
          title="Stay safe"
          subTitle="Make sure your photos, age and bio are true to who you are"
        />
        <WelcomeTerm
          title="Play it cool"
          subTitle="Make sure your photos, age and bio are true to who you are"
        />
        <WelcomeTerm
          title="Be proactive"
          subTitle="Make sure your photos, age and bio are true to who you are"
        />
      </View>

      {/* Third Container */}
      <TouchableOpacity onPress={() => console.log('clicked')} style={styles.button}>
        <Text style={styles.buttonText}>I Agree</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: responsiveFontSize(3),
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});