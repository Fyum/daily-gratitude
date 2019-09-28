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

const DeleteEntryOverlay = ({
  isVisible,
  onClose,
  onSave,
}) => {

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
            onPress={onSave}
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