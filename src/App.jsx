// Roteamentos
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

// Styles
import "./App.css";

// Componentes
import Navbar from "./components/navbar";
import AuthProvider from "./providers/auth-provider";
import ProductsDetail from "./pages/ProductsDetail";
import CartProvider from "./providers/cart-provider";

// Componente principal da aplicação
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
