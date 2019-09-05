import React from 'react';
import {
  FlatList
} from 'react-native';

import DayCard from './DayCard';

const DayCardList = ({
  data,
  dummyItems,
}) => {

  return (
    <FlatList
      data={data}
      renderItem={
        ({ item }) =>
          <DayCard
            date='1 Sept 2019'
            items={dummyItems}>
          </DayCard>
      } 
    />
  )
}

export default DayCardList;