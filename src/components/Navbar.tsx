
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="h-10 w-10" />
          <span className="text-xl font-bold">ФСИН России</span>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-300 transition-colors">Главная</Link>
          <Link to="/about" className="hover:text-blue-300 transition-colors">О колонии</Link>
          <Link to="/services" className="hover:text-blue-300 transition-colors">Услуги</Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors">Контакты</Link>
        </div>

        <Button variant="outline" className="hidden md:block border-white text-white hover:bg-blue-700">
          Официальный портал
        </Button>

        {/* Мобильная иконка меню */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link to="/" className="text-white py-2 hover:bg-slate-600 px-4 rounded" onClick={toggleMenu}>Главная</Link>
            <Link to="/about" className="text-white py-2 hover:bg-slate-600 px-4 rounded" onClick={toggleMenu}>О колонии</Link>
            <Link to="/services" className="text-white py-2 hover:bg-slate-600 px-4 rounded" onClick={toggleMenu}>Услуги</Link>
            <Link to="/contact" className="text-white py-2 hover:bg-slate-600 px-4 rounded" onClick={toggleMenu}>Контакты</Link>
            <Button variant="outline" className="border-white text-white w-full hover:bg-blue-700">
              Официальный портал
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
