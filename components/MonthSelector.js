import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Icon,
} from 'react-native-elements';

import {
  LinearGradient
} from 'expo-linear-gradient';

const monthValueMap = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

const MonthSelector = ({
  currentMonth,
  currentYear,
  onClickPreviousMonth,
  onClickNextMonth,
}) => {
  return (
    <LinearGradient
      colors={['#313639', '#4f5559']}
      >

      <View style={containerStyle}>
        <Icon
          onPress={() => onClickPreviousMonth()}
          style={iconStyle}
          name='keyboard-arrow-left'
          type='material'
          color={textColor}
          underlayColor='transparent'
          size={40}
        />
        <Text style={textStyle}>{monthValueMap[currentMonth]} {currentYear}</Text>
        <Icon
          onPress={() => onClickNextMonth()}
          style={iconStyle}
          name='keyboard-arrow-right' // TODO use the proper icon
          type='material'
          color={textColor}
          underlayColor='transparent'
          size={40}
        />
      </View>

    </LinearGradient>
  )
}

const textColor = '#9eb6c1';

const containerStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 30,
  paddingBottom: 30,
  backgroundColor: 'transparent',
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