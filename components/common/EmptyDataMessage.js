import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { _view, _text } from './EmptyDataMessage.style';

const EmptyDataMessage = ({
  text,
}) => {

  return (
    <View style={_view}>
      <Text style={_text}>{text}</Text>
    </View>
  )
}
export default EmptyDataMessage;
