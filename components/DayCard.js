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
          items.map((u, i) => {
            return (
              <Text style={textStyle}>{u.name}</Text>
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
  border: 'none',
  boxShadow: 'none',
  backgroundColor: '#4F5559',
};

const titleStyle = {
  color: '#9EB6C1',
  borderBottomColor: '#9EB6C1',
  paddingTop: 20,
  paddingBottom: 10,
  marginRight: 10,
  borderBottomWidth: 1,
  textAlign: 'right',
};

const dividerStyle = {
  display: 'none',
};

const textStyle = {
  padding: 20,
  borderRadius: 100,
  backgroundColor: '#84BD6B',
  margin: 10,
  color: 'white'
};

export default DayCard;