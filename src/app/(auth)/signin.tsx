import { View, Text, ScrollView, Image } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import AoraFormField from "@/src/components/AoraFormField/AoraFormField"
import AoraButton from "@/src/components/AoraButton/AoraButton"
import { Link } from "expo-router"

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
            <Image source={require("../../assets/images/logo.png")} alt="Logo" resizeMode="contain" className="w-[115px] h-[35px]" />
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
            <AoraFormField
              title="Email"
              value={form.email}
              handleChangeText={(e: string) => {setForm({...form, email: e})}}
              otherStyles="mt-7"
              placeholder="Enter your email"
              // keyboardType="email-address"
            />
            <AoraFormField
              title="Password"
              value={form.password}
              handleChangeText={(e: string) => {setForm({...form, password: e})}}
              otherStyles="mt-7"
              placeholder="Enter your password"
            />

            <AoraButton
              title="Sign In"
              handlePress={handleSubmit}
              containerStyles="mt-7"
              isLoading={isLoading}
            />

            <View className="justify-center pt-5 flex-col items-center gap-2">
                <Text className="text-lg text-gray-100 font-pregular">Dont' have account?</Text>
                <Link href="/signup" className="text-lg font-psemibold text-secondary">
                  Sign Up
                </Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
