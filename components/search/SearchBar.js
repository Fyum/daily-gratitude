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

import {
  searchEntries
} from '../../reducers/search_reducer'

import queryEntries from '../../data-storage/query_entries'

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

const SearchBar = ({
  dispatch,
}) => {

  const [value, setValue] = useState('')

  const handleOnChangeText = async text => {
    setValue(text)
    if (text.length >= 3) {
      const result = await queryEntries('10', '2019', text)
      dispatch(searchEntries(result))
    }
  }

  return (
    <View>
      <DefaultSearchBar
        placeholder='Search'
        placeholderTextColor={_searchBar.placeholderTextColor}
        onChangeText={handleOnChangeText}
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