import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Icon, 
} from 'react-native-elements';

const MonthSelector = ({
  currentMonth,
  currentYear,
}) => {
  return (

    <View style={containerStyle}>
      <Icon
        style={iconStyle}
        name='arrow-back'
        type='material'
        color={textColor}
        size={40}
      />
      <Text style={textStyle}>{currentMonth} {currentYear}</Text>
      <Icon
        style={iconStyle}
        name='arrow-back'
        type='material'
        color={textColor}
        size={40}
      />
    </View>
  )
}

const textColor = '#9eb6c1';

const containerStyle = {
  flexDirection: 'row',
  alignSelf: 'center',
  paddingTop: 80,
  paddingBottom: 80,
};

const textStyle = {
  color: textColor,
  marginLeft: 35,
  marginRight: 35,
  fontSize: 20,
  fontWeight: 'bold',
  alignSelf: 'center',
}

const iconStyle = {
  
}

export default MonthSelector;