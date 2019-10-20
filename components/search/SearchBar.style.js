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
      borderBottomWidth: 2,
      borderWidth: 2,
      borderColor: textColor,
      padding: 10,
      borderRadius: 50
    },
    input: {
      color: 'white',
    }
  }
export
  const _icon = {
    color: textColor,
  }