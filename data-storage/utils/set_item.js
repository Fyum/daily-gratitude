import { AsyncStorage } from 'react-native';
// TODO use SecureStore from expo for encryption

const setItem = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    const fetchedItem = await AsyncStorage.getItem(key);
    console.log('Fethed item ', fetchedItem);
  } catch (err) {
    console.log('Error saving data with key', key);
  }
}

export default setItem;