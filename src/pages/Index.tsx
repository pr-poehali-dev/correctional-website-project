
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, FileText, Info, Mail, MapPin, Phone, UserCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Главный баннер */}
        <section className="bg-gradient-to-r from-blue-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Федеральное казенное учреждение<br />Исправительная колония №</h1>
            <p className="text-xl mb-8 max-w-2xl">УФСИН России по региону - государственное учреждение, обеспечивающее исполнение наказаний и социальную реабилитацию осужденных.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Подробнее <ChevronRight size={18} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                Контактная информация
              </Button>
            </div>
          </div>
        </section>

        {/* Информационные блоки */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Информация для посетителей</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MapPin className="text-blue-800" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Как добраться</h3>
                <p className="text-gray-600 mb-4">Подробная информация о том, как добраться до учреждения общественным и личным транспортом.</p>
                <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Посмотреть схему <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <UserCheck className="text-blue-800" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Свидания</h3>
                <p className="text-gray-600 mb-4">График приема заявлений, необходимые документы и условия проведения свиданий с осужденными.</p>
                <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Подробнее <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FileText className="text-blue-800" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Документы</h3>
                <p className="text-gray-600 mb-4">Перечень необходимых документов для посещения, отправки посылок и денежных переводов.</p>
                <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Узнать больше <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* О колонии */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">О нашем учреждении</h2>
                <p className="text-gray-700 mb-4">
                  Исправительная колония № является учреждением ФСИН России, предназначенным для отбывания наказания в виде лишения свободы. 
                  Наше учреждение оснащено всем необходимым для обеспечения установленных законом условий содержания осужденных.
                </p>
                <p className="text-gray-700 mb-6">
                  На территории колонии функционируют производственные цеха, образовательный центр, медицинская часть, столовая и другие объекты инфраструктуры.
                </p>
                <Button asChild>
                  <Link to="/about">Подробнее об учреждении</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Административное здание колонии"
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Производственный потенциал */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Производственный потенциал</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Производство мебели"
                  className="w-full h-60 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Мебельное производство</h3>
                  <p className="text-gray-600 mb-4">
                    Наша колония производит широкий ассортимент мебели для дома и офиса, включая столы, стулья, шкафы и многое другое.
                  </p>
                  <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Каталог продукции <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590142035743-05a064182a3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Швейное производство"
                  className="w-full h-60 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Швейное производство</h3>
                  <p className="text-gray-600 mb-4">
                    В нашем учреждении функционирует швейный цех, выпускающий форменную и специальную одежду, постельное белье и другие текстильные изделия.
                  </p>
                  <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Узнать подробнее <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Контактная информация */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-700 p-4 rounded-full mb-4">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p>123456, Россия, Область, г. Город, ул. Улица, д. 1</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-700 p-4 rounded-full mb-4">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p>+7 (123) 456-78-90</p>
                <p className="mt-2">+7 (123) 456-78-91</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-700 p-4 rounded-full mb-4">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Электронная почта</h3>
                <p>info@fsin-colony.ru</p>
                <p className="mt-2">secretary@fsin-colony.ru</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                <Link to="/contact">Все контакты</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
