import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  LinearGradient
} from 'expo-linear-gradient';

import MainHeader from './MainHeader';
import MonthSelector from './entries/MonthSelector';
import AddButton from './entries/AddButton';
import DayCardList from './entries/DayCardList';
import CreateEntryOverlay from './entries/CreateEntryOverlay';
import DeleteEntryOverlay from './entries/DeleteEntryOverlay'; // TODO remove this, just for testing
import EmptyDataMessage from './common/EmptyDataMessage';

import {
  initialState,
  reducer,
  listDayEntriesMonth,
  nextCurrentList,
  previousCurrentList,
  setDisplayedOverlay,
} from '../reducers/entries_reducer';

import getEntries from '../data-storage/get_month_entries';

import themeStyle from '../themes/styles';
const {
  contentBackgroundColor,
} = themeStyle;

const ViewEntries = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFromStorage = async () => {
    const entries = await getEntries(state.currentList.month.toString().padStart(2, 0), state.currentList.year);
    dispatch(listDayEntriesMonth(entries));
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
            : <EmptyDataMessage 
              text={`You don't have any entry yet!`}
            />
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
  }
});


export default ViewEntries;