import { AsyncStorage } from 'react-native';
// TODO use SecureStore from expo for encryption

const getItem = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (!data) {
      console.log('No data with key', key);
      return;
    }
    return data;
  } catch (err) {
    console.log('Error when retrieving data with key', key);
  }
}

export default getItem;