import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const NoEntriesMessage = ({

}) => {

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>You don't have any entry yet!</Text>
    </View>
  )
}

const containerStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  height: 200
};

const textStyle = {
  color: '#9eb6c1',
  borderWidth: 2,
  borderColor: '#9eb6c1',
  borderRadius: 10,
  padding: 20,
  fontSize: 17,
}
export default NoEntriesMessage;
