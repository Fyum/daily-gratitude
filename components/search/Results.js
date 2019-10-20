import React from 'react'

import {
  View
} from 'react-native'

import DayCardList from '../entries/DayCardList'
import NoEntriesMessage from '../entries/NoEntriesMessage'

const Results = ({
  items,
  dispatch
}) => {

  return (
    <View>
      {
          items && items.length
            ? <DayCardList
              dispatch={dispatch}
              data={items}
            />
            : <NoEntriesMessage />
        }
    </View>
  )
}

export default Results