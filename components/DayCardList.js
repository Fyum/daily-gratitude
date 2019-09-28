import React from 'react';
import {
  FlatList
} from 'react-native';

import DayCard from './DayCard';

const DayCardList = ({
  data,
}) => {

  return (
    <FlatList
      data={data}
      renderItem={
        ({ item }) =>
          <DayCard
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