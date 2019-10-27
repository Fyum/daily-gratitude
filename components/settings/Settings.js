import React, { useState } from 'react';
import {
  FlatList,
} from 'react-native';
import {
  Button,
  ListItem,
  Text,
} from 'react-native-elements'

import ToggleSwitch from './ToggleSwitch'

import themeStyle from '../../themes/styles';
const {
  contentBackgroundColor,
  textColor,
} = themeStyle;

import exportData from '../../data-storage/utils/export_data'
import importData from '../../data-storage/utils/import_data'

const Settings = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [notification, setNotification] = useState(false)

  const settings = [
    {
      title: 'Dark theme',
      subtitle: 'Use the dark theme',
      element: <ToggleSwitch checked={darkTheme} onPress={setDarkTheme}/>
    },
    {
      title: 'Turn on notification',
      subtitle: 'Be notified everyday',
      element: <ToggleSwitch checked={notification} onPress={setNotification}/>
    },
    {
      title: 'Export data',
      subtitle: '',
      element: <Button onPress={exportData} title='Export'></Button>
    },
    {
      title: 'Import data',
      subtitle: '',
      element: <Button onPress={importData} title='Import'></Button>
    }
  ]

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.subtitle}
      bottomDivider
      rightElement={item.element}
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