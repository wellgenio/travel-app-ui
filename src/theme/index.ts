interface ThemeAttributes {
  color: {
    white: string;
    dark: string;
    primary: string;
    secondary: string;
    light: string;
    grey: string;
    red: string;
    orange: string;
  };
}

export interface ThemeProps {
  theme: ThemeAttributes;
}

const theme: ThemeAttributes = {
  color: {
    white: '#FFF',
    dark: '#000',
    primary: '#04555c',
    secondary: '#e1e8e9',
    light: '#f9f9f9',
    grey: '#dddedd',
    red: 'red',
    orange: '#f5a623',
  },
};

export default theme;