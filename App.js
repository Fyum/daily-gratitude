import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const plusButtonPressed = () => {

  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
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

      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  plusText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  }
});
