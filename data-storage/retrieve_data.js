import { AsyncStorage } from 'react-native';

const dummyData = {
  '01/09/2019': [
    {
      title: 'Entry 1',
      comments: 'Comments for entry 1',
      date: 'Mon, 01/09/2019',
    },
    {
      title: 'Entry 3',
      comments: 'Comments for entry 3',
      date: 'Mon, 01/09/2019',
    }
  ],
  '02/09/2019': [
    {
      title: 'Entry 2',
      comments: 'Comments for entry 2',
      date: 'Tue, 02/09/2019',
    }
  ]
};

const retrieveData = async (key) => {
  // TODO remove this, only for testing purposes
  if(!key){
    return dummyData;
  }
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

export default retrieveData;