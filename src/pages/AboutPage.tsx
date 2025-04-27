
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, FileText, ShieldCheck, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="bg-slate-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">О колонии</h1>
            <p className="text-xl mt-4">Информация о нашем учреждении и его деятельности</p>
          </div>
        </section>

        {/* История и описание */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">История и общая информация</h2>
                <p className="text-gray-700 mb-4">
                  Федеральное казенное учреждение "Исправительная колония №" УФСИН России по региону было основано в 19XX году. 
                  За время своего существования учреждение претерпело ряд реорганизаций и в настоящее время 
                  является колонией общего режима для содержания осужденных мужчин.
                </p>
                <p className="text-gray-700 mb-4">
                  Учреждение располагается на территории площадью более X гектаров и включает в себя жилую, производственную и 
                  административную зоны. На территории колонии функционируют различные объекты инфраструктуры, 
                  обеспечивающие полноценную жизнедеятельность учреждения.
                </p>
                <p className="text-gray-700 mb-4">
                  Основными задачами учреждения являются:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Исполнение уголовных наказаний в виде лишения свободы</li>
                  <li>Обеспечение правопорядка и законности в учреждении</li>
                  <li>Привлечение осужденных к труду и создание условий для их исправления</li>
                  <li>Организация общего и профессионального образования осужденных</li>
                  <li>Обеспечение охраны здоровья осужденных</li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1621532816372-fc1037f6538e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Административное здание"
                  className="rounded-lg shadow-lg w-full h-auto object-cover mb-6" 
                />
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Основные факты</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <p><span className="font-medium">Год основания:</span> 19XX</p>
                    </div>
                    <div className="flex items-start">
                      <Users className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <p><span className="font-medium">Лимит наполнения:</span> XXX человек</p>
                    </div>
                    <div className="flex items-start">
                      <ShieldCheck className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <p><span className="font-medium">Вид режима:</span> общий</p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <p><span className="font-medium">Часы работы администрации:</span> 09:00 - 18:00</p>
                    </div>
                    <div className="flex items-start">
                      <FileText className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <p><span className="font-medium">Начальник учреждения:</span> Иванов Иван Иванович</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Руководство */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Руководство учреждения</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Начальник колонии"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100" 
                />
                <h3 className="text-xl font-bold mb-2">Иванов Иван Иванович</h3>
                <p className="text-blue-700 font-medium mb-3">Начальник колонии</p>
                <p className="text-gray-600">Полковник внутренней службы</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Заместитель начальника"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100" 
                />
                <h3 className="text-xl font-bold mb-2">Петров Петр Петрович</h3>
                <p className="text-blue-700 font-medium mb-3">Заместитель начальника</p>
                <p className="text-gray-600">Подполковник внутренней службы</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Заместитель по воспитательной работе"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100" 
                />
                <h3 className="text-xl font-bold mb-2">Сидорова Анна Сергеевна</h3>
                <p className="text-blue-700 font-medium mb-3">Заместитель по воспитательной работе</p>
                <p className="text-gray-600">Майор внутренней службы</p>
              </div>
            </div>
          </div>
        </section>

        {/* Структура колонии */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Структура колонии</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Основные подразделения</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                    <div>
                      <p className="font-medium">Отдел безопасности</p>
                      <p className="text-gray-600 text-sm">Обеспечение правопорядка и соблюдения режимных требований</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                    <div>
                      <p className="font-medium">Отдел охраны</p>
                      <p className="text-gray-600 text-sm">Охрана периметра учреждения и надзор за осужденными</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                    <div>
                      <p className="font-medium">Отдел воспитательной работы</p>
                      <p className="text-gray-600 text-sm">Организация воспитательного процесса с осужденными</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Вспомогательные подразделения</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                    <div>
                      <p className="font-medium">Медицинская часть</p>
                      <p className="text-gray-600 text-sm">Оказание медицинской помощи и профилактика заболеваний</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                    <div>
                      <p className="font-medium">Образовательный центр</p>
                      <p className="text-gray-600 text-sm">Организация общего и профессионального образования</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                    <div>
                      <p className="font-medium">Производственные мастерские</p>
                      <p className="text-gray-600 text-sm">Организация трудовой деятельности осужденных</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
