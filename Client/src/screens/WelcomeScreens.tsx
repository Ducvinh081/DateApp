import React from "react";
// cần import React khi khai báo component
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ()=>{
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation:any = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate("Login");
  };
    return (
      <View
      className="flex-1"
      style={{
        width: wp(100),
      }}
    >
      <StatusBar barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}/>

      <View
        className="justify-center items-center"
        style={{
          width: wp(100),
          height: hp(100),
        }}
      >
        {/* Heart Icon */}
        <View
          className=" pt-1 justify-center items-center my-4"
          style={{
            width: wp(100),
          }}
        >
          <Image
            source={require("../assets/HeartIcon.png")}
            style={{
              width: wp(100),
              height: hp(50),
              resizeMode: "cover",
              position:"absolute",
              bottom: 0,
            }}
          />
        </View>

        {/* Welcome Text */}
        <View className="w-full p-6 px-10">
          <Text
            className="font-semibold  tracking-widest leading-none "
            style={{
              fontSize: wp(7.5),
            }}
          >
            Find someone to talk?
          </Text>

          <Text
            className="font-semibold tracking-widest w-[100%] leading-none"
            style={{
              fontSize: wp(7.5),
            }}
          >
            Get it with Zig Date!
          </Text>

          <Text
            className="text-gray-800 leading-6 tracking-wider mt-2"
            style={{
              fontSize: wp(3.5),
            }}
          >
            We combine cutting-edge technologies with a modern approach to
            matchmaking.
          </Text>
        </View>

        {/* Button */}
        <View className="w-full px-10 justify-center items-center">
          <TouchableOpacity
            className="bg-[#F26322] px-4 py-4 rounded-xl flex-row justify-center items-center w-[45%]"
            onPress={handleGetStarted}
          >
            <Text
              className="text-white font-bold "
              style={{
                fontSize: wp(3.5),
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
}
export default WelcomeScreen;
// export default để có thể sử dụng component Hello của bạn 