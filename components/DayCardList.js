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
            date={item.date}
            items={item.entries}
            >
          </DayCard>
      } 
    />
  )
}

export default DayCardList;