import themeStyle from '../../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  textColor,
} = themeStyle;

export
  const _searchBar = {
    placeholderTextColor: textColor,
    container: {
      backgroundColor: headerBackgroundColor,
    },
    inputContainer: {
      backgroundColor: headerBackgroundColor,
      borderWidth: 1,
      borderColor: textColor,
      borderBottomWidth: 1,
      padding: 10,
    },
    input: {
      color: 'white',
    }
  }
export
  const _icon = {
    color: textColor,
  }