import Header from "./components/header/Index"
import { GlobalStyle, theme } from "./app.styled"
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
