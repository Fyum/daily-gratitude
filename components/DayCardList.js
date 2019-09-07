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
            date={item[0].date}
            items={item}>
          </DayCard>
      } 
    />
  )
}

export default DayCardList;