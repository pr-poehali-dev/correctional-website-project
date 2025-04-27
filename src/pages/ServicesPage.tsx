
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, FileText, Mail, Package, Phone, ShoppingBag, Truck, UserCheck } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="bg-slate-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Услуги и информация</h1>
            <p className="text-xl mt-4">Производство, передачи и информация для посетителей</p>
          </div>
        </section>

        {/* Производство */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Производственная деятельность</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Мебельное производство"
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Мебельное производство</h3>
                  <p className="text-gray-600 mb-4">
                    Производство корпусной мебели, столов, стульев и специализированной мебели для учреждений.
                  </p>
                  <Button className="w-full">
                    <ShoppingBag size={18} className="mr-2" /> Каталог продукции
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590142035743-05a064182a3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Швейное производство"
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Швейное производство</h3>
                  <p className="text-gray-600 mb-4">
                    Пошив форменной и спецодежды, постельных принадлежностей и текстильных изделий.
                  </p>
                  <Button className="w-full">
                    <ShoppingBag size={18} className="mr-2" /> Каталог продукции
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Металлообработка"
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Металлообработка</h3>
                  <p className="text-gray-600 mb-4">
                    Производство металлических изделий, сеток, решеток и нестандартных металлоконструкций.
                  </p>
                  <Button className="w-full">
                    <ShoppingBag size={18} className="mr-2" /> Каталог продукции
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Заказ продукции</h3>
              <p className="text-gray-700 mb-4">
                Для размещения заказа на продукцию нашего производства вы можете связаться с отделом сбыта:
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center">
                  <Phone className="text-blue-700 mr-2" size={20} />
                  <p>+7 (123) 456-78-92</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-700 mr-2" size={20} />
                  <p>sales@fsin-colony.ru</p>
                </div>
                <div className="flex items-center">
                  <Truck className="text-blue-700 mr-2" size={20} />
                  <p>Возможна доставка по России</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Для посетителей */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Информация для родственников</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <UserCheck className="text-blue-800" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Свидания с осужденными</h3>
                    <p className="text-gray-600">
                      Информация о порядке предоставления краткосрочных и длительных свиданий с осужденными.
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">График приема заявлений на свидания:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Понедельник - пятница:</span> с 9:00 до 17:00</li>
                    <li><span className="font-medium">Суббота:</span> с 9:00 до 13:00</li>
                    <li><span className="font-medium">Воскресенье:</span> выходной</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Необходимые документы:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Паспорт или иной документ, удостоверяющий личность</li>
                    <li>Свидетельство о рождении (для несовершеннолетних)</li>
                    <li>Свидетельство о браке (для супругов)</li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full">
                  <FileText size={18} className="mr-2" /> Подробнее о свиданиях
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Package className="text-blue-800" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Передачи и посылки</h3>
                    <p className="text-gray-600">
                      Правила приема посылок, передач и бандеролей для осужденных.
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">График приема передач:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Понедельник - пятница:</span> с 9:00 до 16:00</li>
                    <li><span className="font-medium">Суббота:</span> с 9:00 до 13:00</li>
                    <li><span className="font-medium">Воскресенье:</span> выходной</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Ограничения по весу и содержанию:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Вес одной передачи не должен превышать 20 кг</li>
                    <li>Запрещены алкоголь, наркотические вещества, колюще-режущие предметы</li>
                    <li>Ограничения на продукты питания согласно правилам ФСИН</li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Download size={18} className="mr-2" /> Скачать полный перечень разрешенных предметов
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
