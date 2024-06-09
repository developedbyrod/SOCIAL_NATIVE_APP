import { Text, TouchableOpacity } from "react-native"
import React from "react"
import { AoraButtonProps } from "@/src/interfaces"

const AoraButton = ({
  handlePress,
  title,
  containerStyles,
  textStyles,
  isLoading,
}: AoraButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] items-center justify-center ${containerStyles} ${isLoading ? "opacity-50" : "opacity-100"}`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AoraButton
