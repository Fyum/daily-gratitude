import React from 'react';

import {
  Text
} from 'react-native';
import {
  Icon,
  Header,
} from 'react-native-elements';

const MainHeader = ({
  onClickMenu,
}) => {
  return (
    <Header
      containerStyle={{ borderBottomColor: '#313639', height: 80 }}
      placement="left"
      backgroundColor='#313639'
    >
      <Icon
        name='menu'
        type='material'
        size={30}
        onPress={() => onClickMenu()}
        color='#9EB6C1'
      />
      <Text style={{ color: '#9EB6C1' }}>Daily gratitude</Text>
    </Header>
  )
};

export default MainHeader;