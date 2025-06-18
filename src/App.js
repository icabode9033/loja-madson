import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Páginas principais
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import PendingPage from "./pages/PendingPage";
import FailurePage from "./pages/FailurePage";

// Novas páginas adicionadas
import Novidades from "./pages/Novidades";
import Masculino from "./pages/Masculino";
import Contato from "./pages/Contato";
import Acessorios from "./pages/Acessorios";
import Kids from "./pages/Kids";
import Feminino from "./pages/Feminino";
import Books from "./pages/Books";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Carrossel from "./pages/Carrossel/index.jsx";

const App = () => {
  return (
    <>
      <div className="bg-slate-900 fixed w-full z-10">
        <Navbar />
      </div>

      <div className="pt-20"> {/* para empurrar o conteúdo abaixo da Navbar fixa */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/pending" element={<PendingPage />} />
          <Route path="/failure" element={<FailurePage />} />

          {/* Novas rotas de páginas */}
          <Route path="/Novidades" element={<Novidades />} />
          <Route path="/Masculino" element={<Masculino />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Acessorios" element={<Acessorios />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Feminino" element={<Feminino />} />
          <Route path="/books" element={<Books />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrossel" element={<Carrossel />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
