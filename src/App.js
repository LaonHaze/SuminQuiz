import './App.css';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QuestionBox from './components/questionBox/QuestionBox';
import defaultTheme from './themes/default';

const theme = createTheme(defaultTheme);

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
