import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  LinearGradient
} from 'expo-linear-gradient';

import MainHeader from './components/MainHeader';
import MonthSelector from './components/MonthSelector';
import AddButton from './components/AddButton';
import DayCardList from './components/DayCardList';
import CreateEntryOverlay from './components/CreateEntryOverlay';
import DeleteEntryOverlay from './components/DeleteEntryOverlay'; // TODO remove this, just for testing
import NoEntriesMessage from './components/NoEntriesMessage';

import {
  initialState,
  reducer,
  listDayEntriesMonth,
  addNewEntry,
  nextCurrentList,
  previousCurrentList,
  setDisplayedOverlay,
} from './reducers/main_reducer';

import getEntries from './data-storage/get_month_entries';

import themeStyle from './themes/styles';
const {
  contentBackgroundColor,
} = themeStyle;

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFromStorage = async () => {
    const entries = await getEntries(state.currentList.month.toString().padStart(2, 0), state.currentList.year);
    dispatch(listDayEntriesMonth(entries));
    // setData(entries);
  };

  useEffect(() => {
    
    fetchFromStorage();
  }, [state.currentList]);

  return (
    <LinearGradient
        style={styles.container}
        start={{ x: 0, y: 0.3 }} // Apparently 'start' is the end gradient 3% and 'end' is the start gradient with 15%
        end={{ x: 0, y: 1.5 }}
        colors={[contentBackgroundColor, '#AF656F']}
      >
      <MainHeader
        onClickMenu={() => { }} // TODO
      />
      <MonthSelector
        currentMonth={state.currentList.month}
        currentYear={state.currentList.year}
        onClickPreviousMonth={() => dispatch(previousCurrentList())}
        onClickNextMonth={() => dispatch(nextCurrentList())}
      />

      
        {
          state.data && state.data.length
            ? <DayCardList
              dispatch={dispatch}
              data={state.data}
            />
            : <NoEntriesMessage />
        }

      <CreateEntryOverlay
        dispatch={dispatch}
        isVisible={state.isDisplayedOverlay.createEntry}
      />
      <DeleteEntryOverlay
        dispatch={dispatch}
        isVisible={state.isDisplayedOverlay.deleteEntry}
        targetItem={state.entryToDelete}
        />
      <AddButton 
        onPress={() => dispatch(setDisplayedOverlay({ createEntry: true }))} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 24,
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    borderBottomColor: 'gray',
  }
});
