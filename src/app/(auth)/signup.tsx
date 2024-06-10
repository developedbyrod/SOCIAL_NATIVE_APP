import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import React, { useState } from "react"
import AoraFormField from "@/src/components/AoraFormField/AoraFormField"
import AoraButton from "@/src/components/AoraButton/AoraButton"
import { Link } from "expo-router"

const SignUp = () => {

  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleSubmit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={require("../../assets/images/logo.png")}
            alt="Logo"
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Register in to Aora
          </Text>

          <AoraFormField
            title="Name"
            value={form.username}
            handleChangeText={(e: string) => {
              setForm({ ...form, username: e })
            }}
            otherStyles="mt-7"
            placeholder="Enter your name"
            // keyboardType="email-address"
          />

          <AoraFormField
            title="E-mail"
            value={form.email}
            handleChangeText={(e: string) => {
              setForm({ ...form, email: e })
            }}
            otherStyles="mt-7"
            placeholder="Enter your e-mail"
          />

          <AoraFormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => {
              setForm({ ...form, password: e })
            }}
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
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already? 
            </Text>
            <Link
              href="/signin"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
