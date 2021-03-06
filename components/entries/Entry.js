import React, { useState, useCallback } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {
  Icon,
} from 'react-native-elements';

import {
  setEntryToDelete,
  setDisplayedOverlay,
} from '../../reducers/entries_reducer';

import themeStyle from '../../themes/styles';
const {
  textColor,
  iconBackgroundColor,
} = themeStyle;

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
    dispatch(setEntryToDelete({ dayKey, entryId, date }));
    dispatch(setDisplayedOverlay({ deleteEntry: true }));
  }, [setDisplayedOverlay, dispatch, setEntryToDelete]);

  return (
    <View style={{ ...containerStyle, ...containerWidth }}>

      <View style={{ flexDirection: 'row', margin: 10, flexWrap: 'wrap' }}>

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
              color: textColor,
              borderRadius: 20,
              backgroundColor: iconBackgroundColor,
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
              color: textColor,
              borderRadius: 20,
              backgroundColor: iconBackgroundColor,
              padding: 4
            }}
            onPress={() => { }}
            underlayColor='transparent'
          />
        }
      </View>
      {
        !!showComment && <Text style={{ ...commentTextStyle, backgroundColor: color }}>{comment || 'No comment'}</Text>
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
  paddingTop: 10,
  paddingBottom: 15,
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

