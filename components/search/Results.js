import React from 'react'

import {
  View
} from 'react-native'

import DayCardList from '../entries/DayCardList'
import EmptyDataMessage from '../common/EmptyDataMessage'

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
            : <EmptyDataMessage 
                text='No entry found'
            />
        }
    </View>
  )
}

export default Results