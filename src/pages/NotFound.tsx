
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-9xl font-bold text-slate-800 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Страница не найдена</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
            Возможно, страница была удалена или указан неверный адрес.
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="mr-2" size={18} />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
