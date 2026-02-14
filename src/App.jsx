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

// Componente principal da aplicação
const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
