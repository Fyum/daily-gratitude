import { AsyncStorage } from 'react-native';
// TODO use SecureStore from expo for encryption

const formatData = data =>
  data
    .filter(x => x[1] !== null)
    .map(x => ({ key: x[0], value: JSON.parse(x[1])[0] }));

/**
 * 
 * @param {Array} keys
 * @returns {Array} e.g: [{ key, value }, { key, value }]
 */
const getMultiItems = async (keys) => {
  try {
    const data = await AsyncStorage.multiGet(keys);
    console.log('GET MULTI ITEM', data);

    if (!data || !data.length) {
      console.log('No data with key', key);
      return;
    }
    return formatData(data);
  } catch (err) {
    console.err(err);
    console.log('Error when retrieving data with keys', keys);
  }
}

export default getMultiItems;