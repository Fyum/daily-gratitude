import React from 'react';
import {
  Icon
} from 'react-native-elements';

import {
  _icon
} from './AddButton.style';

const AddButton = ({
  onPress,
}) => {
  return (
    <Icon
      name='add'
      type='material'
      size={40}
      containerStyle={_icon.container}
      iconStyle={_icon.iconStyle}
      onPress={onPress}
      underlayColor='transparent'
    />
  )
};

export default AddButton;