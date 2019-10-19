import React, { useState, useCallback } from 'react';
import { DateTime } from 'luxon';
import {
  View,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Overlay,
  Icon,
  Header,
  Text,
  Input,
} from 'react-native-elements';

import {
  addDayEntry,
  setDisplayedOverlay,
} from '../../reducers/main_reducer';

import setEntry from '../../data-storage/set_entry';
import getDayEntries from '../../data-storage/get_day_entries';
import { _input, _icon, _text, _header, _overlay } from './CreateEntryOverlay.style';

const CreateEntryOverlay = ({
  dispatch,
  isVisible,
}) => {
  const DATE_FORMAT = 'dd/LL/yyyy';

  const [date, setDate] = useState(DateTime.local().toFormat(DATE_FORMAT));
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    date: '',
    title: '',
  });

  const fieldsAreValid = async () => {
    const error = {
      date: !DateTime.fromFormat(date, DATE_FORMAT).isValid ? 'Date is invalid' : false,
      title: !title ? 'Field is required' : false
    }
    setErrorMessages(error);
    return error.date === false
      && error.title === false
  }

  const clearFields = () => {
    setTitle('');
    setComment('');
  }

  const onSavePress = useCallback(async () => {
    if (!await fieldsAreValid()) {
      console.log('Invalid fields');
      return;
    }
    const newEntry = {
      date,
      title,
      comment,
    };
    await setEntry(newEntry);
    const updatedDayEntries = await getDayEntries(date);
    dispatch(addDayEntry(updatedDayEntries));
    dispatch(setDisplayedOverlay({ createEntry: false }));
    clearFields();
  }, [date, title, comment, setEntry, getDayEntries]);

  const onBackPress = useCallback(async () => {
    dispatch(setDisplayedOverlay({ createEntry: false }));
    clearFields();
  }, []);

  return (

    <Overlay
      isVisible={isVisible}
      fullScreen
      overlayStyle={_overlay.overlay}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior='padding'
      >
        <Header
          containerStyle={_header.container}
          placement="left"
          backgroundColor={_header.backgroundColor}>
          <Icon
            name='arrow-back'
            type='material'
            size={30}
            onPress={onBackPress}
            color={_icon.color}
            underlayColor='transparent'
          />
          <Text style={_text}>Create new entry</Text>
          <Icon
            name='check'
            type='material'
            size={30}
            onPress={onSavePress}
            color={_icon.color}
            underlayColor='transparent'
          />
        </Header>
        <View style={{ marginTop: 30, flex: 1 }}>
          <Input
            containerStyle={_input.container}
            inputStyle={_input.input}
            labelStyle={_input.label}
            label='Date'
            defaultValue={date}
            onChangeText={text => setDate(text)}
            errorStyle={_input.error}
            errorMessage={errorMessages.date ? errorMessages.date : ''}
          />
          <Input
            containerStyle={_input.container}
            inputStyle={_input.input}
            labelStyle={_input.label}
            label='Title'
            placeholder='Write a short text'
            onChangeText={text => setTitle(text)}
            errorStyle={_input.error}
            errorMessage={errorMessages.title ? errorMessages.title : ''}
          />
          <Input
            containerStyle={_input.container}
            inputStyle={_input.input}
            labelStyle={_input.label}
            label='Comment'
            placeholder='Write your comment here'
            onChangeText={text => setComment(text)}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </KeyboardAvoidingView>
    </Overlay>
  )
}
export default CreateEntryOverlay;