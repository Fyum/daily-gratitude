import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import themeStyle from '../themes/styles';
const {
  textColor,
} = themeStyle;

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
  color: textColor,
  borderWidth: 2,
  borderColor: textColor,
  borderRadius: 10,
  padding: 20,
  fontSize: 17,
}
export default NoEntriesMessage;
