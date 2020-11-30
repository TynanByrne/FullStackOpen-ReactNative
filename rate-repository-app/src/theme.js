import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#E71D36',
    textWashed: '#586069',
    primary: '#011627',
    secondary: '#2EC4B6',
    backgroundPrimary: '#FDFFFC',
    backgroundGreyed: '#d3d3d3',
    error: '#D73A4A'
  },
  fontSizes: {
    body: 18,
    subheading: 20,
    heading: 24,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
    washed: '200'
  },
};

export default theme;