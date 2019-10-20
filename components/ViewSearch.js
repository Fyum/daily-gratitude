import React, { useReducer } from 'react';
import {
  LinearGradient
} from 'expo-linear-gradient';
import themeStyle from '../themes/styles';

import {
  initialState,
  reducer,
} from '../reducers/search_reducer';

import {
  ActivityIndicator
} from 'react-native'

import {
  Text
} from 'react-native-elements'

const {
  contentBackgroundColor,
  contentBackgroundColor2,
  textColor,
} = themeStyle;
import SearchBar from './search/SearchBar'
import Results from './search/Results'

const ViewSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0.3 }} // Apparently 'start' is the end gradient 3% and 'end' is the start gradient with 15%
      end={{ x: 0, y: 1.5 }}
      colors={[contentBackgroundColor, contentBackgroundColor2]}
    >
      <SearchBar 
        dispatch={dispatch}
      />

      <Results
        items={state.result}
        dispatch={dispatch}
      />
      <ActivityIndicator size="large" color={textColor} />
    </LinearGradient>
  )
}

export default ViewSearch;