import { alpha, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff7aa8',
      light: '#ffa6c4',
      dark: '#e2487b',
    },
    secondary: {
      main: '#60e6d9',
      light: '#93f0e8',
      dark: '#22b8a8',
    },
    background: {
      default: '#07111f',
      paper: '#0d192b',
    },
    text: {
      primary: '#f5f7fb',
      secondary: '#a8b3c7',
    },
  },
  shape: {
    borderRadius: 22,
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: {
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 0.95,
    },
    h2: {
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1,
    },
    h3: {
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.02,
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          minHeight: '100vh',
          backgroundColor: '#07111f',
          backgroundImage: 'radial-gradient(circle at top, rgba(255,122,168,0.16), transparent 30%), radial-gradient(circle at bottom right, rgba(96,230,217,0.12), transparent 24%), linear-gradient(180deg, #07111f 0%, #091423 48%, #050b14 100%)',
          color: '#f5f7fb',
          overflowX: 'hidden',
        },
        '*': {
          boxSizing: 'border-box',
        },
        '::selection': {
          backgroundColor: alpha('#ff7aa8', 0.35),
          color: '#fff',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        '::-webkit-scrollbar': {
          width: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: '#08111b',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(180deg, #ff7aa8 0%, #60e6d9 100%)',
          borderRadius: '999px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 22,
          paddingRight: 22,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
  },
});

export default theme;