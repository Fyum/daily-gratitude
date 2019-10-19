import React, { useState } from 'react';
import {
  FlatList
} from 'react-native';
import {
  ListItem,
} from 'react-native-elements'

import ToggleSwitch from './ToggleSwitch'

import themeStyle from '../../themes/styles';
const {
  contentBackgroundColor,
  textColor,
} = themeStyle;

const Settings = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [notification, setNotification] = useState(false)

  const settings = [
    {
      title: 'Dark theme',
      subtitle: 'Use the dark theme',
      state: darkTheme,
      onPress: setDarkTheme,
    },
    {
      title: 'Turn on notification',
      subtitle: 'Be notified everyday',
      state: notification,
      onPress: setNotification,
    }
  ]

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.subtitle}
      bottomDivider
      rightElement={<ToggleSwitch checked={item.state} onPress={item.onPress}/>}
      titleStyle={{ color: textColor }}
      subtitleStyle={{ color: textColor }}
      containerStyle={{ backgroundColor: contentBackgroundColor }}
    />
  )

  return <FlatList
    data={settings}
    renderItem={renderItem}
  />
}

export default Settings;