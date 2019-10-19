import themeStyle from '../../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  textColor,
} = themeStyle;


export
  const overlayStyle = {
    overlay: {
      backgroundColor: contentBackgroundColor,
    },
    title: {
      marginBottom: 30,
      color: textColor,
      fontWeight: 'bold',
    },
    textContent: {
      marginBottom: 30,
      color: textColor,
      alignSelf: 'center'
    }
  };