import React from 'react';
import {
  Icon,
  Header,
} from 'react-native-elements';

import themeStyle from '../themes/styles';

const {
  headerBackgroundColor: themeBackgroundColor,
  textColor: themeColor,
} = themeStyle;

const MainHeader = ({
  onClickMenu,
}) => {
  return (
    <Header
      containerStyle={{ borderBottomColor: '#313639', height: 80 }}
      placement="left"
      backgroundColor={themeBackgroundColor}
    >
      <Icon
        name='menu'
        type='material'
        size={30}
        onPress={() => onClickMenu()}
        color={themeColor}
      />
    </Header>
  )
};

export default MainHeader;