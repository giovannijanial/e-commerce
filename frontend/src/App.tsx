import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle, theme } from "./app.styled";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Index";
import AboutPage from './pages/about/Index';
import ContactPage from './pages/contact/Index';
import HomePage from "./pages/home/Index";
import LoginPage from './pages/login/Index';
import { default as OrdersPage } from './pages/orders/Index';
import ProductsPage from './pages/products/Index';
import SignUpPage from './pages/signUp/Index';

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
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sign' element={<SignUpPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
