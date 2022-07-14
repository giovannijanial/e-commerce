import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle, theme } from "./app.styled";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Index";
import AuthContext from './contexts/authProvider';
import DashBoardNavegation from './dashboard/components/navgation/Index';
import DashHomePage from './dashboard/pages/home/Index';
import DashOrderPage from './dashboard/pages/orders/Index';
import DashAddProductPage from './dashboard/pages/products/addProduct/Index';
import DashProductPage from './dashboard/pages/products/Index';
import DashAddUserPage from './dashboard/pages/users/addUser/Index';
import DashUserPage from './dashboard/pages/users/Index';
import AboutPage from './pages/about/Index';
import ContactPage from './pages/contact/Index';
import HomePage from "./pages/home/Index";
import LoginPage from './pages/login/Index';
import NotFoundPage from './pages/notFound/Index';
import { default as OrdersPage } from './pages/orders/Index';
import ProductsPage from './pages/products/Index';
import ProductPage from './pages/products/product/Index';
import SearchPage from './pages/search/Index';
import SignUpPage from './pages/signUp/Index';

export const url = "http://localhost:3000";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {auth.user.role === "admin" ? (
          <BrowserRouter>
            <DashBoardNavegation />
            <Routes>
              <Route path='/' element={<DashHomePage />} />
              <Route path='/dash/products' element={<DashProductPage />} />
              <Route path='/dash/products/add' element={<DashAddProductPage />} />
              <Route path='/dash/users' element={<DashUserPage />} />
              <Route path='/dash/users/add' element={<DashAddUserPage />} />
              <Route path='/dash/orders' element={<DashOrderPage />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Header />
            <Routes>
              {/* public routes */}
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/products/category/:category' element={<ProductsPage />} />
              <Route path='/products/:id' element={<ProductPage />} />
              <Route path='/orders' element={<OrdersPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/sign' element={<SignUpPage />} />
              <Route path='/search' element={<SearchPage />} />

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
