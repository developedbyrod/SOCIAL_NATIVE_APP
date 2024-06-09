import { Tabs } from 'expo-router';
import icons from "@/src/constants/icons";
import TabIcon from '@/src/components/TabIcon';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
}
