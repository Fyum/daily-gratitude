import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Icon
} from 'react-native-elements';

const AddButton = ({
  onPress,
}) => {
  return (
    <Icon
      name='add'
      type='material'
      size={40}
      containerStyle={containerStyle}
      iconStyle={iconStyle}
      onPress={onPress}
      underlayColor='transparent'
    />
  )
};

const containerStyle = {
  position: 'absolute',
  bottom: 40,
  right: 40,
}

const iconStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.44,
  shadowRadius: 10.32,
  elevation: 16,
  // ^ Shadow box generated online
  backgroundColor: '#F56D8E',
  color: 'white',
  padding: 15,
  borderRadius: 100,
};

const button = {
};

export default AddButton;