import { AsyncStorage } from 'react-native';

const saveData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (err) {
    console.log('Error saving data with key', key);
  }
}

export default saveData;