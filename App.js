import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MainHeader from './components/MainHeader';
import MonthSelector from './components/MonthSelector';
import AddButton from './components/AddButton';
import DayCardList from './components/DayCardList';
import CreateEntryOverlay from './components/CreateEntryOverlay';
import DeleteEntryOverlay from './components/DeleteEntryOverlay'; // TODO remove this, just for testing
import NoEntriesMessage from './components/NoEntriesMessage';

import getEntries from './data-storage/get_month_entries';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [currentList, setCurrentList] = useState({ month: 9, year: 2019 }); // TODO use current month

  const fetchFromStorage = async () => {
    const entries = await getEntries(currentList.month.toString().padStart(2, 0), currentList.year);
    setData(entries);
  };

  const previousMonth = useCallback(() => {
    const newMonth = currentList.month - 1;
    if (newMonth === 0) {
      setCurrentList({
        month: 12,
        year: currentList.year - 1,
      })
    } else {
      setCurrentList({
        month: newMonth,
        year: currentList.year,
      });
    };

  }, [currentList, setCurrentList]);

  const nextMonth = useCallback(() => {
    const newMonth = currentList.month + 1;
    if (newMonth === 13) {
      setCurrentList({
        month: 1,
        year: currentList.year + 1,
      })
    } else {
      setCurrentList({
        month: newMonth,
        year: currentList.year,
      });
    }
  }, [currentList, setCurrentList]);

  useEffect(() => {
    fetchFromStorage();
  }, [currentList]);

  return (
    <View style={styles.container}>
      <MainHeader
        onClickMenu={() => { }} // TODO
      />
      <MonthSelector
        currentMonth={currentList.month}
        currentYear={currentList.year}
        onClickPreviousMonth={previousMonth}
        onClickNextMonth={nextMonth}
      />
      {
        data && data.length
          ? <DayCardList
            data={data}
          />
          : <NoEntriesMessage />
      }

      {/* <CreateEntryOverlay
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={() => { setModalVisible(false); fetchFromStorage(); }} // TODO save new entry to memory
      /> */}
      <DeleteEntryOverlay
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}  
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
