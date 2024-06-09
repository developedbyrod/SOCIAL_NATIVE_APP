import React from "react"

import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen 
          name="signin"
          options={{ headerShown: false }} 
      />
      <Stack.Screen 
          name="signup" 
          options={{ headerShown: false }}
       />

       <StatusBar backgroundColor="#161622" style="light" />
    </Stack>
  )
}
