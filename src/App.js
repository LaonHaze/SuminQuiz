import './App.css';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QuestionBox from './components/questionBox/QuestionBox'

const theme = createTheme({
  typography: {
    fontFamily: 'Hi Melody'
  },
  palette: {
    primary: {
      main: "#FCCEE2",
      contrastText: "white"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <QuestionBox />
      </Container>
    </ThemeProvider>
  );
}

export default App;
