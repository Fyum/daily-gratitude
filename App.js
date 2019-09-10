import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ListItem,
  Header,
  Icon,
} from 'react-native-elements';

import AddButton from './components/AddButton';
import DayCardList from './components/DayCardList';
import CreateEntryOverlay from './components/CreateEntryOverlay';

import getEntries from './data-storage/get_month_entries';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchFromStorage = async() => {
      const entries = await getEntries('09', '2019');
      setData(entries);
    };

    fetchFromStorage();
  }, [])

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{ borderBottomColor: '#313639', height: 80 }}
        placement="left"
        backgroundColor='#313639'
      >
        <Icon
          name='menu'
          type='material'
          size={30}
          onPress={() => setModalVisible(true)}
          color='#9EB6C1'
        />
        <Text style={{ color: '#9EB6C1' }}>Daily gratitude</Text>
      </Header>
      <DayCardList
        data={data}
      />
      <CreateEntryOverlay
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={() => setModalVisible(false)} // TODO save new entry to memory
      />
      <AddButton onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 24,
    backgroundColor: '#4F5559',
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    borderBottomColor: 'gray',
  }
});
