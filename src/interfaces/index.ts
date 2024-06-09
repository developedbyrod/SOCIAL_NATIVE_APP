import { ImageSourcePropType } from "react-native"

export interface TabIconProps{
    name:string,
    focused: boolean,
    icon: ImageSourcePropType | undefined,
    color: string
}