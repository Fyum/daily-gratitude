import React from 'react';
import { Card } from 'react-native-elements';
import {
  Text,
  View,
} from 'react-native';

import Entry from './Entry';

import {
  cardStyle
} from './DayCard.style';

const DayCard = ({
  dispatch,
  dateLabel,
  dayKey,
  items,
  isLast,
}) => {

  return (
    <View>
      {
        items.length ?
          <Card
            title={dateLabel}
            containerStyle={cardStyle.container}
            titleStyle={cardStyle.title}
            dividerStyle={cardStyle.divider}
          >
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {
                items.map(x => {
                  return (
                    <Entry key={x.id}
                      dispatch={dispatch}
                      dayKey={dayKey}
                      date={x.date}
                      entryId={x.id}
                      title={x.title}
                      color={x.color}
                      comment={x.comment}
                    />
                  );
                })
              }
            </View>
            {
              isLast &&
              <View style={{ paddingBottom: 200 }}></View>
            }
          </Card>
          : null
      }
    </View>
  )
};


export default DayCard;