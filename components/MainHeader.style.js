import themeStyle from '../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  textColor,
} = themeStyle;

export
  const headerStyle = {
    container: {
      height: 80,
      borderBottomColor: headerBackgroundColor,
    },
    backgroundColor: headerBackgroundColor,
  }

export
  const iconStyle = {
    color: textColor,
  }