import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003641',
      "&:hover": {
        backgroundColor: "#013c48",
      },
    },
    secondary: {
      main: '#000',
      border: "1px solid #bfbfbf",
      "&:hover": {
        boderColor: "#5f5f5f",
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;