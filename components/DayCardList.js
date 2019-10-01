import React from 'react';
import {
  FlatList
} from 'react-native';

import DayCard from './DayCard';

const DayCardList = ({
  dispatch,
  data,
}) => {

  return (
    <FlatList
      data={data}
      renderItem={
        ({ item }) =>
          <DayCard
            dispatch={dispatch}
            key={item.key}
            dayKey={item.key}
            dateLabel={item.dateLabel}
            items={item.entries}
            >
          </DayCard>
      } 
    />
  )
}

export default DayCardList;