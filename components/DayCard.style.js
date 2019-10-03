import themeStyle from '../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  textColor,
} = themeStyle;


export
  const cardStyle = {
    container: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 5,
      marginLeft: 0,
      marginRight: 0,
      borderWidth: 0,
      marginTop: 0,
      backgroundColor: 'transparent',
    },
    title: {
      color: textColor,
      borderBottomColor: textColor,
      paddingBottom: 5,
      marginRight: 10,
      borderBottomWidth: 1,
      textAlign: 'right',
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 16
    },
    divider: {
      display: 'none',
    }
  };