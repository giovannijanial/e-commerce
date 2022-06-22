import Header from "./components/header/Index"
import { GlobalStyle, theme } from "./app.styled"
import { ThemeProvider } from '@mui/material/styles';
import Carousel from "./components/carousel/Index";
import HomeContainer from "./components/homeContainer/Index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
        <Carousel />
        <HomeContainer />
      </ThemeProvider>
    </>
  )
}

export default App
