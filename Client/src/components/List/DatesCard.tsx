import {
    Dimensions,
    TouchableWithoutFeedback,
    Image,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import { CheckBadgeIcon } from "react-native-heroicons/solid";
  import { LinearGradient } from "react-native-linear-gradient";
  
  var { width, height } = Dimensions.get("window");
  
  const DatesCard: React.FC<{ item: any}> = ({
    item,
  }) => {
    return (
      <View className="relative">
        <TouchableWithoutFeedback >
          <Image
            source={item.image_url}
            style={{
              width: width * 0.8,
              height: height * 0.75,
            }}
            resizeMode="cover"
            className="rounded-3xl"
          />
  
          {/* <Text>Hello</Text> */}
        </TouchableWithoutFeedback>
  
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 1 }}
        />
  
        <View className="absolute bottom-10 justify-start w-full items-start pl-4">
          <View className="flex-row justify-center items-center ">
            <Text className="text-2xl text-white font-bold">
              {item.first_name} {item.last_name}
              {", "}
            </Text>
            <Text className="text-2xl text-white font-bold mr-2">{item.dob}</Text>
            <CheckBadgeIcon size={25} color={"#3B82F6"} />
          </View>
  
          {/* Location */}
          <View className="flex-row justify-center items-center ">
            <Text className="text-lg text-white font-regular">
              Nha Trang
              {", "}
            </Text>
            <Text className="text-lg text-white font-regular mr-2">
              Viet Nam
            </Text>
          </View>
        </View>
      </View>
    );
  }
  export default DatesCard;