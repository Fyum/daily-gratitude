import React from 'react';
import {
  Icon,
  Header,
} from 'react-native-elements';

import {
  headerStyle,
  iconStyle,
} from './MainHeader.style';

const MainHeader = ({
  onClickMenu,
}) => {
  return (
    <Header
      containerStyle={headerStyle.container}
      placement="left"
      backgroundColor={headerStyle.backgroundColor}
    >
      <Icon
        name='menu'
        type='material'
        size={30}
        onPress={() => onClickMenu()}
        color={iconStyle.color}
        underlayColor='transparent'
      />
    </Header>
  )
};

export default MainHeader;