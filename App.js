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

import AddButton from './components/AddButton';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* TODO fix this flex top bar*/}
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.topBar}></View> 
      </View>
      {/* <View style={{ flex: 3 }}>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
        />

      </View> */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <AddButton onPress={() => setModalVisible(!modalVisible)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    borderBottomColor: 'gray',
  }
});
