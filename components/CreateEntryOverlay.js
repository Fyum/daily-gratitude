import React from 'react';
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

const CreateEntryOverlay = ({
  isVisible,
  onClose,
  onSave,
}) => {

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
            onPress={onSave}
            color='#9EB6C1'
          />
        </Header>
        <View style={{ marginTop: 50 }}>
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            label='Date'
            placeholder='01/02/2019'
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            label='Title'
            placeholder='Sunny day'
          />
          <Input
            containerStyle={containerInputStyle}
            inputStyle={{ color: 'white' }}
            label='Comment'
            placeholder='What a beautiful sunny day'
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
  marginBottom: 30
};

export default CreateEntryOverlay;