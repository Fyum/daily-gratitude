import React from 'react';
import {
  LinearGradient
} from 'expo-linear-gradient';
import themeStyle from '../themes/styles';
const {
  contentBackgroundColor,
} = themeStyle;
import SearchBar from './search/SearchBar'

const ViewSearch = () => {

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0.3 }} // Apparently 'start' is the end gradient 3% and 'end' is the start gradient with 15%
      end={{ x: 0, y: 1.5 }}
      colors={[contentBackgroundColor, contentBackgroundColor]}
    >
      <SearchBar />
    </LinearGradient>
  )
}

export default ViewSearch;