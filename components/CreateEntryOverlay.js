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
} from '../reducers/main_reducer';

import setEntry from '../data-storage/set_entry';
import getDayEntries from '../data-storage/get_day_entries';

import themeStyle from '../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  textColor,
} = themeStyle;

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
      date: !DateTime.fromFormat(date, DATE_FORMAT).isValid ? 'Date is invalid' : '',
      title: !title ? 'Field is required' : ''
    }
    console.log(error);
    setErrorMessages(error);
    return !error.date && !error.title;
  }

  const onSavePress = useCallback(async () => {
    if(!fieldsAreValid()){
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
  }, [date, title, comment, setEntry, getDayEntries]);
  return (

    <Overlay
      isVisible={isVisible}
      fullScreen
      overlayStyle={overlayStyle}>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior='padding'
      >
        <Header
          containerStyle={{ borderBottomColor: '#313639', height: 80 }}
          placement="left"
          backgroundColor={headerBackgroundColor}>
          <Icon
            name='arrow-back'
            type='material'
            size={30}
            onPress={() => dispatch(setDisplayedOverlay({ createEntry: false }))}
            color={textColor}
            underlayColor='transparent'
          />
          <Text style={{ color: textColor }}>Create new entry</Text>
          <Icon
            name='check'
            type='material'
            size={30}
            onPress={onSavePress}
            color={textColor}
            underlayColor='transparent'
          />
        </Header>
        <View style={{ marginTop: 30, flex: 1 }}>
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            labelStyle={{ color: textColor }}
            label='Date'
            defaultValue={date}
            onChangeText={text => setDate(text)}
            errorStyle={{ color: 'red' }}
            errorMessage={errorMessages.date ? errorMessages.date : ''}
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            labelStyle={{ color: textColor }}
            label='Title'
            placeholder='Write a short text'
            onChangeText={text => setTitle(text)}
            errorStyle={{ color: 'red' }}
            errorMessage={errorMessages.title ? errorMessages.title : ''}
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            labelStyle={{ color: textColor }}
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

const overlayStyle = {
  backgroundColor: contentBackgroundColor,
  padding: 0,
};

const containerInputStyle = {
  marginBottom: 30,
  paddingLeft: 50,
  paddingRight: 50,
};

export default CreateEntryOverlay;