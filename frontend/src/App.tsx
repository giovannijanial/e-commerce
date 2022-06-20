import Header from "./components/header/Index"
import { GlobalStyle, theme } from "./app.styled"
import { ThemeProvider } from '@mui/material/styles';
import Carousel from "./components/carousel/Index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
        <Carousel />
      </ThemeProvider>
    </>
  )
}

export default App
