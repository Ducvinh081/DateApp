import React from "react"
import { Button, Text, View } from "react-native"
import { auth } from "../../FirebaseConfig";

const ProfileScreen = () => {
  return (
    <View className="flex-1 justify-center items-center p-5">
        <Text>profile</Text>
        <Button onPress={() => auth.signOut()} title="Log out" />   
      </View>
  )
};

export default ProfileScreen;
