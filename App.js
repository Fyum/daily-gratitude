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
        containerStyle={{ borderBottomColor: '#313639', height: 80 }}
        placement="left"
        backgroundColor='#313639'
        leftComponent={{ icon: 'menu', color: '#9EB6C1' }}
        centerComponent={{ text: 'Daily gratitude', style: { color: '#9EB6C1' } }}
        rightComponent={{ icon: 'home', color: '#9EB6C1' }}
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
    backgroundColor: '#4F5559',
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    borderBottomColor: 'gray',
  }
});
