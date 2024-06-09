
import { TabIconProps } from "@/src/interfaces";
import { View, Image, Text } from "react-native";

const TabIcon = ({icon, color , name, focused} : TabIconProps) => {
    return(
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>{name}</Text>
        </View>
    )
}

export default TabIcon;