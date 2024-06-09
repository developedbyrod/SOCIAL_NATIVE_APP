import { ImageSourcePropType } from "react-native"

export interface TabIconProps {
  name: string
  focused: boolean
  icon: ImageSourcePropType | undefined
  color: string
}
export interface AoraButtonProps{
    handlePress: () => void
    title: string
    containerStyles?: string
    textStyles?: string
    isLoading?: boolean
}
