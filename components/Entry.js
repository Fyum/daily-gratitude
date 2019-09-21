import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const Entry = ({
  title,
  comment,
  color,
}) => {

  const [border, setBorder] = useState({});
  const [containerWidth, setContainerWidth] = useState({});
  const [showComment, setShowComment] = useState(false);

  const press = () => {
    setShowComment(!showComment);
    if (border.borderColor) {
      setBorder({});
      setContainerWidth({});
      return;
    }

    setBorder({
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderColor: '#313639',
    });

    setContainerWidth({
      width: '100%',
    })
  }

  return (
    <View style={{ ...containerStyle, ...containerWidth }}>
      <TouchableOpacity
        onPress={press}
      >
        <Text style={{ ...textStyle, ...border, backgroundColor: color }}>{title}</Text>
      </TouchableOpacity>
      {
        !!showComment && <Text style={{ ...commentTextStyle, backgroundColor: color }}>{comment}</Text>

      }
    </View>
  )
}

const boxShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7,
}

const containerStyle = {
  width: 'auto',
  alignSelf: 'flex-start',
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
  height: 'auto',
  fontSize: 18,
  alignSelf: 'flex-start',
  ...boxShadow,
};

const commentTextStyle = {
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 30,
  paddingRight: 30,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 40,
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 0,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  backgroundColor: '#84BD6B',
  borderColor: '#313639',
  margin: 5,
  marginLeft: 25,
  marginBottom: 20,
  marginTop: 0,
  color: 'white',
  height: 'auto',
  fontSize: 18,
  fontStyle: 'italic',
  opacity: 0.7,
  ...boxShadow,
}

export default Entry;

