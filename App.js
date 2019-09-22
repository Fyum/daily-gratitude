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

import MainHeader from './components/MainHeader';
import MonthSelector from './components/MonthSelector';
import AddButton from './components/AddButton';
import DayCardList from './components/DayCardList';
import CreateEntryOverlay from './components/CreateEntryOverlay';

import getEntries from './data-storage/get_month_entries';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [monthYear, setMonthYear] = useState('09/2019');


  const fetchFromStorage = async () => {
    const [month, year] = monthYear.split('/');
    const entries = await getEntries(month, year);
    setData(entries);
  };

  useEffect(() => {

    fetchFromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <MainHeader
        onClickMenu={() => {}} // TODO
      />
      <MonthSelector
        currentMonth={'September'}
        currentYear={2019}
      />
      <DayCardList
        data={data}
      />
      <CreateEntryOverlay
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={() => { setModalVisible(false); fetchFromStorage(); }} // TODO save new entry to memory
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
