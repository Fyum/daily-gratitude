import React from 'react';
import {
  FlatList
} from 'react-native';

import DayCard from './DayCard';

const DayCardList = ({
  dispatch,
  data,
}) => {

  const lastIndex = data.length - 1
  return (
    <FlatList
      data={data}
      renderItem={
        ({ item, index }) =>
          <DayCard
            dispatch={dispatch}
            key={item.key}
            dayKey={item.key}
            dateLabel={item.dateLabel}
            items={item.entries}
            isLast={lastIndex === index}
            >
          </DayCard>
      } 
    />
  )
}

export default DayCardList;