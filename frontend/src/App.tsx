import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle, theme } from "./app.styled";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Index";
import AboutPage from './pages/about/Index';
import ContactPage from './pages/contact/Index';
import DashBoardPage from './dashboard/Index';
import HomePage from "./pages/home/Index";
import LoginPage from './pages/login/Index';
import NotFoundPage from './pages/notFound/Index';
import { default as OrdersPage } from './pages/orders/Index';
import ProductsPage from './pages/products/Index';
import ProductPage from './pages/products/product/Index';
import SearchPage from './pages/search/Index';
import SignUpPage from './pages/signUp/Index';
import RequireAuthPage from './pages/requireAuth/Index';
import { useContext } from 'react';
import AuthContext from './contexts/authProvider';

export const url = "http://localhost:3000";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {auth.user.role === "admin" ? (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<DashBoardPage />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Header />
            <Routes>
              {/* public routes */}
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/products/:id' element={<ProductPage />} />
              <Route path='/orders' element={<OrdersPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/sign' element={<SignUpPage />} />
              <Route path='/search' element={<SearchPage />} />

              {/* admin routes */}
              <Route element={<RequireAuthPage />}>
                <Route path='/dashboard' element={<DashBoardPage />} />
              </Route>

              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </ThemeProvider>
    </>
  )
}

export default App
