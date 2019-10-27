import { AsyncStorage } from 'react-native'

const exportData = async () => {
  const allKeys = await AsyncStorage.getAllKeys();

  const result = await AsyncStorage.multiGet(allKeys)
  console.log(result)
};

export default exportData


