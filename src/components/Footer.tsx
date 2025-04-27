
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ФКУ ИК-№</h3>
            <p className="mb-2">УФСИН России по региону</p>
            <p className="mb-2">ИНН: 1234567890</p>
            <p>ОГРН: 1234567890123</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">Адрес: 123456, Россия, Область, г. Город, ул. Улица, д. 1</p>
            <p className="mb-2">Телефон: +7 (123) 456-78-90</p>
            <p>Email: info@fsin-colony.ru</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li><a href="https://fsin.gov.ru" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">ФСИН России</a></li>
              <li><a href="http://government.ru" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Правительство России</a></li>
              <li><a href="http://www.kremlin.ru" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Президент России</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between">
          <p>© {currentYear} ФКУ ИК-№. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/about" className="hover:text-blue-300 transition-colors">О колонии</Link>
            <Link to="/services" className="hover:text-blue-300 transition-colors">Услуги</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors">Контакты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
