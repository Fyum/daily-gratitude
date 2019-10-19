import React from 'react';
import {
  LinearGradient
} from 'expo-linear-gradient';
import themeStyle from '../themes/styles';
const {
  contentBackgroundColor,
} = themeStyle;
import Settings from './settings/Settings'

const ViewSettings = () => {

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0.3 }} // Apparently 'start' is the end gradient 3% and 'end' is the start gradient with 15%
      end={{ x: 0, y: 1.5 }}
      colors={[contentBackgroundColor, contentBackgroundColor]}
    >
      <Settings />
    </LinearGradient>
  )
}

export default ViewSettings;