import React from 'react';
import {
  FlatList
} from 'react-native';

import DayCard from './DayCard';

const COLORS = [
  '#BE5555',
  '#BE9355',
  '#C7BF45',
  '#A2BE55',
  '#78BE55',
  '#45C782',
  '#55A6BE',
  '#557CBE',
  '#5345C7',
  '#6255BE',
  '#8655BE',
  '#C74581'
]

const getRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)]

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
            color={getRandomColor()}
            >
          </DayCard>
      } 
    />
  )
}

export default DayCardList;