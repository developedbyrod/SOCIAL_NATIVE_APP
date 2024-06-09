import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { AoraFormFieldProps } from '@/src/interfaces'
import icons from "@/src/constants/icons"


const AoraFormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props} : AoraFormFieldProps) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='flex-row w-full h-16 bg-black-100 border-2 rounded-2xl focus:border-secondary items-center pl-2 pr-2'>
        <TextInput 
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>

            <Image 
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
              />
          </TouchableOpacity>
        )}

      </View>
    </View>
  )
}

export default AoraFormField