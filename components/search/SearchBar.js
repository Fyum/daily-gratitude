import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'
import { SearchBar as DefaultSearchBar } from 'react-native-elements'

const SearchBar = () => {

  const [value, setValue] = useState('')
  
  return (
    <View>
      <Text>Search bar</Text>
      <DefaultSearchBar
        placeholder='Search'
        onChangeText={setValue}
        value={value}
      ></DefaultSearchBar>
    </View>
  )
}

export default SearchBar