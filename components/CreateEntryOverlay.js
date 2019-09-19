import React, { useState, useCallback } from 'react';
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

import setEntry from '../data-storage/set_entry';

const CreateEntryOverlay = ({
  isVisible,
  onClose,
  onSave,
}) => {

  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const onSavePress = useCallback(async () => {
    const newEntry = {
      date,
      title,
      comment,
    };
    await setEntry(newEntry);
    onSave();
  }, [date, title, comment, setEntry])


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
            label='Date'
            placeholder='01/02/2019'
            onChangeText={text => setDate(text)}
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            label='Title'
            placeholder='Write a short text'
            onChangeText={text => setTitle(text)}
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            label='Comment'
            placeholder='Write your comment here'
            onChangeText={text => setComment(text)}
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