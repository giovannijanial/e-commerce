import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from "./contexts/authProvider"
import { CartProvider } from './contexts/cartProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
)
