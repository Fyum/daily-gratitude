import React from 'react'

import {
  Switch
} from 'react-native'

const ToggleSwitch = ({ checked, onPress }) => {

  return (
    <Switch
      value={checked}
      onValueChange={() => onPress(!checked)}
    />
  )
}

export default ToggleSwitch