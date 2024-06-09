import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AoraButton from "../components/AoraButton/AoraButton"
import { StatusBar } from "expo-status-bar"

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">

      <ScrollView contentContainerStyle={{height: "100%"}}>

        <View className="w-full justify-center items-center h-full px-4">
            <Image
                className="w-[130px] h-[84px]"
                resizeMode="contain"
                source={require("../assets/images/logo.png")}
                alt="Logo"
            />

            <Image
                className="max-w-[380px] w-full h-[300px]"
                resizeMode="contain"
                source={require("../assets/images/cards.png")}
            />

            <View className="relative mt-5">
                <Text className="text-3xl text-white font-bold text-center">
                    Discover Endless Possibilities with {' '}
                    <Text className="text-secondary-200">Aora</Text>
                </Text>

                <Image
                    source={require("../assets/images/path.png")}
                    className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                    resizeMode="contain"
                />
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: 
                embark on a journey of limitless exploration with Aora.
            </Text>

            <AoraButton 
                title="Continue with Email"
                handlePress={() => {}}
                containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
      <StatusBar 
        backgroundColor="#161622" 
        style="light"
      />
    </SafeAreaView>
  )
}

export default index
