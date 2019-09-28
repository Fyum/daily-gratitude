import { AsyncStorage } from 'react-native';
// TODO use SecureStore from expo for encryption


/**
 * Fetch directly from storage with the provided key
 * @param {*} key the key from storage e.g. @day_entries_item:20/01/2019 
 * @returns e.g [{ date: '20/01/2019', title: 'Title', comment: 'Comment', id: 1}]
 */
const getItem = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (!data) {
      console.log('No data with key', key);
      return;
    }
    return JSON.parse(data);
  } catch (err) {
    console.log('Error when retrieving data with key', key);
  }
}

export default getItem;