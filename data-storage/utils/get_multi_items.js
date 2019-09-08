import { AsyncStorage } from 'react-native';
// TODO use SecureStore from expo for encryption

const formatData = data =>
  data.map(x => ({ key: x[0], value: x[1] }));

/**
 * 
 * @param {Array} keys
 * @returns {Array} e.g: [{ key, value }, { key, value }]
 */
const getMultiItems = async (keys) => {
  try {
    const data = await AsyncStorage.mutliGet(keys);

    if (!data || !data.length) {
      console.log('No data with key', key);
      return;
    }
    return formatData(data);
  } catch (err) {
    console.log('Error when retrieving data with keys', keys);
  }
}

export default getMultiItems;