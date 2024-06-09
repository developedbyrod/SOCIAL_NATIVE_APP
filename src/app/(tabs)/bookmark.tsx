import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
export default function Bookmark() {
  return (
    <View style={styles.container}>
      <Text className='text-red-500 font-pbold'>Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
