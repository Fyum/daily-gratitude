import React from 'react';
import { Card } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Entry from './Entry';

import themeStyle from '../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  textColor,
} = themeStyle;

const DayCard = ({
  dispatch,
  dateLabel,
  dayKey,
  items,
}) => {

  return (
    <View>
      {
        items.length ?
          <Card
            title={dateLabel}
            containerStyle={containerStyle}
            titleStyle={titleStyle}
            dividerStyle={dividerStyle}
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
          </Card>
          : null
      }
    </View>

  )
};

const containerStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
  paddingBottom: 5,
  marginLeft: 0,
  marginRight: 0,
  borderWidth: 0,
  marginTop: 0,
  backgroundColor: contentBackgroundColor,
};

const titleStyle = {
  color: textColor,
  borderBottomColor: textColor,
  paddingBottom: 5,
  marginRight: 10,
  borderBottomWidth: 1,
  textAlign: 'right',
  fontWeight: 'normal',
  fontStyle: 'italic',
  fontSize: 16
};

const dividerStyle = {
  display: 'none',
};


export default DayCard;