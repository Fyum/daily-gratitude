import React, { useState, useCallback } from 'react';
import { DateTime } from 'luxon';
import {
  View
} from 'react-native';

import {
  Overlay,
  Icon,
  Header,
  Text,
  Input,
} from 'react-native-elements';

import {
  addDayEntry
} from '../reducers/main_reducer';

import setEntry from '../data-storage/set_entry';
import getDayEntries from '../data-storage/get_day_entries';

const CreateEntryOverlay = ({
  dispatch,
  isVisible,
  onClose,
  onSave,
}) => {

  const [date, setDate] = useState(DateTime.local().toFormat('dd/LL/yyyy'));
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const resetFields = useCallback(() => {
    setDate(DateTime.local().toFormat('dd/LL/yyyy'));
    setTitle('');
    setComment('');
    console.log('reset fields', title);
  }, [date, title, comment]);

  const onSavePress = useCallback(async () => {
    const newEntry = {
      date,
      title,
      comment,
    };
    await setEntry(newEntry);
    const updatedDayEntries = await getDayEntries(date);
    console.log('get ENTRY result', updatedDayEntries);
    dispatch(addDayEntry(updatedDayEntries));
    onSave();
    resetFields();
  }, [date, title, comment, setEntry, getDayEntries]);
  return (

    <Overlay
      isVisible={isVisible}
      fullScreen
      overlayStyle={overlayStyle}>
      <View>
        <Header
          containerStyle={{ borderBottomColor: '#313639', height: 80 }}
          placement="left"
          backgroundColor='#313639'>
          <Icon
            name='arrow-back'
            type='material'
            size={30}
            onPress={onClose}
            color='#9EB6C1'
          />
          <Text style={{ color: '#9EB6C1' }}>Create new entry</Text>
          <Icon
            name='check'
            type='material'
            size={30}
            onPress={onSavePress}
            color='#9EB6C1'
          />
        </Header>
        <View style={{ marginTop: 50 }}>
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            labelStyle={{ color: '#9eb6c1' }}
            label='Date'
            placeholder='01/02/2019'
            defaultValue={date}
            onChangeText={text => setDate(text)}
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            labelStyle={{ color: '#9eb6c1' }}
            label='Title'
            placeholder='Write a short text'
            onChangeText={text => setTitle(text)}
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            labelStyle={{ color: '#9eb6c1' }}
            label='Comment'
            placeholder='Write your comment here'
            onChangeText={text => setComment(text)}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>
    </Overlay>
  )
}

const overlayStyle = {
  backgroundColor: '#4f5559',
  padding: 0,
};

const containerInputStyle = {
  marginBottom: 30,
  paddingLeft: 50,
  paddingRight: 50,
};

export default CreateEntryOverlay;