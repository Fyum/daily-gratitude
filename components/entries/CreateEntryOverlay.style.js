import themeStyle from '../../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  textColor,
} = themeStyle;

export
  const _overlay = {
    overlay: {
      backgroundColor: contentBackgroundColor,
      padding: 0,
    }
  }

export
  const _header = {
    container: {
      borderBottomColor: '#313639',
      height: 80,
    },
    backgroundColor: headerBackgroundColor,
  }

export
  const _icon = {
    color: textColor,
  }

export
  const _text = {
    color: textColor
  }

export
  const _input = {
    container: {
      marginBottom: 30,
      paddingLeft: 50,
      paddingRight: 50,
    },
    input: {
      color: 'white'
    },
    label: {
      color: textColor,
    },
    error: {
      color: 'red'
    }
  }
