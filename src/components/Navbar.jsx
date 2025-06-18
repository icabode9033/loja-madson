import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="logo.png" className="h-14" alt="Logo" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>

      {/* Menu */}
      <ul className="nav list-unstyled flex gap-4 justify-center bg-gray-700 py-2">
        <li>
          <NavLink to="/" className="nav-link text-white hover:underline">Início</NavLink>
        </li>
        <li>
          <NavLink to="/Novidades" className="nav-link text-white hover:underline">Novidades</NavLink>
        </li>
        <li>
          <NavLink to="/Masculino" className="nav-link text-white hover:underline">Masculino</NavLink>
        </li>
        <li>
          <NavLink to="/Feminino" className="nav-link text-white hover:underline">Feminino</NavLink>
        </li>
        <li>
          <NavLink to="/Kids" className="nav-link text-white hover:underline">Kids</NavLink>
        </li>
        <li>
          <NavLink to="/Acessorios" className="nav-link text-white hover:underline">Acessorios</NavLink>
        </li>
        <li>
          <NavLink to="/contato" className="nav-link text-white hover:underline">Contato</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
