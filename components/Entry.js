import React, { useState, useCallback } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {
  Icon,
} from 'react-native-elements';

import deleteEntry from '../data-storage/delete_entry';
import {
  deleteDayEntry
} from '../reducers/main_reducer';
import getDayEntries from '../data-storage/get_day_entries';

const Entry = ({
  dispatch,
  date,
  dayKey,
  title,
  comment,
  color,
  entryId,
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

    // When comment is shown, we want to have the full width 
    setContainerWidth({
      width: '100%',
    })
  }

  const onPressDeleteEntry = useCallback(async () => {
    console.log('On press delete entry', dayKey, entryId);
    await deleteEntry(dayKey, entryId);
    const updatedDay = await getDayEntries(date);
    dispatch(deleteDayEntry(updatedDay));
  }, [deleteEntry, getDayEntries, dispatch, deleteDayEntry]);

  return (
    <View style={{ ...containerStyle, ...containerWidth }}>

      <View style={{ flexDirection: 'row', margin: 10 }}>

        <TouchableOpacity
          onPress={press}
          style={{ ...touchableStyle, ...border, backgroundColor: color }}
        >
          <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
        {
          !!showComment &&
          <Icon
            name='delete'
            type='material'
            size={20}
            containerStyle={{
              marginLeft: 10,
              marginTop: 10,
            }}
            iconStyle={{
              color: '#9eb6c1',
              // borderColor: 'white',
              // borderWidth: 2,
              borderRadius: 20,
              backgroundColor: '#5b6267',
              padding: 4
            }}
            onPress={onPressDeleteEntry}
            underlayColor='transparent'
          />
        }
        {
          !!showComment &&
          <Icon
            name='edit'
            type='material'
            size={20}
            containerStyle={{
              marginLeft: 10,
              marginTop: 10,
            }}
            iconStyle={{
              color: '#9eb6c1',
              // borderColor: 'white',
              // borderWidth: 2,
              borderRadius: 20,
              backgroundColor: '#5b6267',
              padding: 4
            }}
            onPress={() => { }}
            underlayColor='transparent'
          />
        }
      </View>
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
  // alignSelf: 'flex-start',
};

const textStyle = {
  fontSize: 18,
  color: 'white',
}

const touchableStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 20,
  backgroundColor: '#84BD6B',
  height: 'auto',
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
  // alignSelf: 'flex-start', // TODO find a way to not make it stretch nor overflow 
  ...boxShadow,
}

export default Entry;

