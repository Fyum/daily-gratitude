import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'
import { 
  SearchBar as DefaultSearchBar, 
  Icon 
} from 'react-native-elements'

import { _icon, _searchBar } from './SearchBar.style'

const SearchIcon = () => {
  return (
    <Icon
      name='search'
      type='material'
      color={_icon.color}
    />
  )
}


const ClearIcon = () => {
  return (
    <Icon
      name='cancel'
      type='material'
      color={_icon.color}
    />
  )
}

const SearchBar = () => {

  const [value, setValue] = useState('')

  return (
    <View>
      <DefaultSearchBar
        placeholder='Search'
        placeholderTextColor={_searchBar.placeholderTextColor}
        onChangeText={setValue}
        value={value}
        clearIcon={<ClearIcon />}
        inputContainerStyle={_searchBar.inputContainer}
        inputStyle={_searchBar.input}
        containerStyle={_searchBar.container}
        searchIcon={<SearchIcon />}
        round
      ></DefaultSearchBar>
    </View>
  )
}

export default SearchBar