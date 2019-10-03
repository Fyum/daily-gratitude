import React, { useState, useCallback } from 'react';
import { DateTime } from 'luxon';
import {
  View
} from 'react-native';

import {
  Overlay,
  Text,
  Button,
} from 'react-native-elements';

import {
  setDisplayedOverlay,
  deleteDayEntry,
  setEntryToDelete,
} from '../reducers/main_reducer';


import deleteEntry from '../data-storage/delete_entry';
import getDayEntries from '../data-storage/get_day_entries';

const DeleteEntryOverlay = ({
  dispatch,
  isVisible,
  targetItem,
}) => {

  const onClose = () => {
    dispatch(setDisplayedOverlay({ deleteEntry: false }));
    dispatch(setEntryToDelete({}));
  };

  const onConfirm = useCallback(async () => {
    await deleteEntry(targetItem.dayKey, targetItem.entryId);
    const updatedDay = await getDayEntries(targetItem.date);
    dispatch(deleteDayEntry(updatedDay));
    dispatch(setDisplayedOverlay({ deleteEntry: false }));
    dispatch(setEntryToDelete({})); // TODO maybe do all this in one reduce operation??
  })

  return (
    <Overlay
      isVisible={isVisible}
      overlayStyle={overlayStyle}
      height='auto'
      width='auto'
    >
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 10 }}>
        <Text
          style={{
            marginBottom: 30,
            color: 'white',
            fontWeight: 'bold',
          }}
        >Delete entry</Text>
        <Text
          style={{
            marginBottom: 30,
            color: 'white',
            alignSelf: 'center'
          }}
        >Are you sure you want to delete this entry?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            title='CANCEL'
            onPress={onClose}
            type='clear'
          />
          <Button
            title='OK'
            onPress={onConfirm}
            type='clear'
          />
        </View>
      </View>
    </Overlay>
  )
}

const overlayStyle = {
  backgroundColor: '#4f5559',
};

const containerInputStyle = {
  marginBottom: 30,
  paddingLeft: 50,
  paddingRight: 50,
};

export default DeleteEntryOverlay;