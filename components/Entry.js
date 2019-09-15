import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

const Entry = ({
  title,
  color,
}) => {

  const [border, setBorder] = useState({});

  const longPress = () => {
    if(border.borderColor) {
      setBorder({});
      return;
    }

    setBorder({
      borderWidth: 2,
      borderColor: '#9eb6c1',
    })
  }

  return (
    <TouchableOpacity
      onLongPress={longPress}
    >
      <Text style={{ ...textStyle, ...border, backgroundColor: color }}>{title}</Text>
    </TouchableOpacity>
  )
}

const textStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 20,
  backgroundColor: '#84BD6B',
  margin: 10,
  color: 'white',
  height: 'auto',
  fontSize: 18,
};

export default Entry;

