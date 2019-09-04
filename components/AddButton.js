import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const AddButton = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  button: {
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
  text: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
  }
});

export default AddButton;