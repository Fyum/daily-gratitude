import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ListItem,
  Header,
  Icon,
} from 'react-native-elements';

import AddButton from './components/AddButton';
import DayCardList from './components/DayCardList';
import CreateEntryOverlay from './components/CreateEntryOverlay';

const makeData = () => new Array(10).fill(0).map((x, i) => ({
  name: `NAME-${i}`,
}))

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(makeData());

  const logPress = () => console.log('Pressed');

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{ borderBottomColor: '#313639', height: 80 }}
        placement="left"
        backgroundColor='#313639'
      >
        <Icon
          name='menu'
          type='material'
          size={30}
          onPress={() => setModalVisible(true)}
          color='#9EB6C1'
        />
        <Text style={{ color: '#9EB6C1' }}>Daily gratitude</Text>
      </Header>
      <DayCardList
        data={[1, 2, 3, 4, 5]}
        dummyItems={data}
      />
      <CreateEntryOverlay
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={() => setModalVisible(false)} // TODO save new entry to memory
      />
      <AddButton onPress={() => setModalVisible(true)} />
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
