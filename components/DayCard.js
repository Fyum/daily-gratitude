import React from 'react';
import { Card } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DayCard = ({
  date,
  items,
}) => {

  return (
    <Card
      title={date}
      containerStyle={containerStyle}
      titleStyle={titleStyle}
      dividerStyle={dividerStyle}
    >
      <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          items.map((x, i) => {
            return (
              <Text key={`text-${i}`} style={{...textStyle, backgroundColor: x.color }}>{x.title}</Text>
            );
          })
        }

      </View>
    </Card>
  )
};

const containerStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  marginLeft: 0,
  marginRight: 0,
  borderWidth: 0,
  backgroundColor: '#4F5559',
};

const titleStyle = {
  color: '#9EB6C1',
  borderBottomColor: '#9EB6C1',
  paddingBottom: 20,
  marginRight: 10,
  borderBottomWidth: 1,
  textAlign: 'right',
};

const dividerStyle = {
  display: 'none',
};

const textStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 20,
  backgroundColor: '#84BD6B',
  margin: 10,
  color: 'white',
  height: '100%'
};


export default DayCard;