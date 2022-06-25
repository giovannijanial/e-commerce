import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle, theme } from "./app.styled";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Index";
import HomePage from "./pages/home/Index";
import ProductsPage from './pages/products/Index';

export const url = "http://localhost:3000";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
