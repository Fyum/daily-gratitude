import React from 'react';
import {
  Icon
} from 'react-native-elements';

import {
  iconStyle
} from './AddButton.style';

const AddButton = ({
  onPress,
}) => {
  return (
    <Icon
      name='add'
      type='material'
      size={40}
      containerStyle={iconStyle.container}
      iconStyle={iconStyle.icon}
      onPress={onPress}
      underlayColor='transparent'
    />
  )
};

export default AddButton;