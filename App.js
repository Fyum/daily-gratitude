import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  ListItem,
  Header,
} from 'react-native-elements';

import AddButton from './components/AddButton';
import DayCardList from './components/DayCardList';

const makeData = () => new Array(10).fill(0).map((x, i) => ({
  name: `NAME-${i}`,
}))

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(makeData());

  return (
    <View style={styles.container}>
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Daily gratitude', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <DayCardList
        data={[1, 2, 3, 4, 5]}
        dummyItems={data}
      />
      <AddButton onPress={() => setModalVisible(!modalVisible)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 24,
    // backgroundColor: '#fff',
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    borderBottomColor: 'gray',
  }
});
