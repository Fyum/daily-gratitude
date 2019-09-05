import React from 'react';
import { Card } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { blue, white } from 'ansi-colors';

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
              <Text style={styles.textStyle}>{u.name}</Text>
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
  marginLeft: 10,
  marginRight: 10,
};

const titleStyle = {
  color: 'gray',
  paddingTop: 20,
  paddingBottom: 10,
  marginRight: 10,
  borderBottomWidth: 1,
  textAlign: 'right',
};

const dividerStyle = {
  display: 'none',
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#84BD6B',
    margin: 10,
    color: 'white'
  }
});

export default DayCard;