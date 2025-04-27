
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="bg-slate-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Контактная информация</h1>
            <p className="text-xl mt-4">Как с нами связаться и как до нас добраться</p>
          </div>
        </section>

        {/* Основная информация */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-8">Контакты</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="text-blue-800" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Юридический адрес</h3>
                      <p className="text-gray-700">123456, Россия, Область, г. Город, ул. Улица, д. 1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="text-blue-800" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Телефоны</h3>
                      <p className="text-gray-700 mb-1"><span className="font-medium">Приемная начальника:</span> +7 (123) 456-78-90</p>
                      <p className="text-gray-700 mb-1"><span className="font-medium">Дежурная часть (круглосуточно):</span> +7 (123) 456-78-91</p>
                      <p className="text-gray-700"><span className="font-medium">Отдел по работе с осужденными:</span> +7 (123) 456-78-92</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="text-blue-800" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Электронная почта</h3>
                      <p className="text-gray-700 mb-1"><span className="font-medium">Общая:</span> info@fsin-colony.ru</p>
                      <p className="text-gray-700"><span className="font-medium">Для обращений граждан:</span> appeal@fsin-colony.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Clock className="text-blue-800" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Часы работы администрации</h3>
                      <p className="text-gray-700 mb-1"><span className="font-medium">Понедельник - пятница:</span> 09:00 - 18:00</p>
                      <p className="text-gray-700 mb-1"><span className="font-medium">Перерыв:</span> 13:00 - 14:00</p>
                      <p className="text-gray-700"><span className="font-medium">Суббота, воскресенье:</span> выходные дни</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-8">Как добраться</h2>
                
                {/* Карта */}
                <div className="rounded-lg overflow-hidden shadow-lg mb-6 bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-600">Интерактивная карта</p>
                  {/* В реальном проекте здесь будет встроена карта */}
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <h3 className="text-xl font-bold mb-4">Маршрут проезда</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">На общественном транспорте:</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Автобус № X от остановки "X" до остановки "Y"</li>
                        <li>Маршрутное такси № Z от станции метро "А" до остановки "B"</li>
                        <li>Электричка от ж/д вокзала до станции "C", далее автобусом № D до остановки "E"</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg">На личном автомобиле:</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>По трассе M-X в направлении города Y, съезд на развязке Z</li>
                        <li>Далее по указателям до населенного пункта A</li>
                        <li>После указателя "Исправительная колония" повернуть направо</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6">
                    Построить маршрут
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* График приема граждан */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">График приема граждан руководством учреждения</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="py-3 px-4 text-left">Должность</th>
                    <th className="py-3 px-4 text-left">ФИО</th>
                    <th className="py-3 px-4 text-left">Дни приема</th>
                    <th className="py-3 px-4 text-left">Часы приема</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Начальник колонии</td>
                    <td className="py-3 px-4">Иванов И.И.</td>
                    <td className="py-3 px-4">Понедельник</td>
                    <td className="py-3 px-4">14:00 - 16:00</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-slate-50">
                    <td className="py-3 px-4 font-medium">Заместитель начальника</td>
                    <td className="py-3 px-4">Петров П.П.</td>
                    <td className="py-3 px-4">Вторник</td>
                    <td className="py-3 px-4">10:00 - 12:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Заместитель по воспитательной работе</td>
                    <td className="py-3 px-4">Сидорова А.С.</td>
                    <td className="py-3 px-4">Среда</td>
                    <td className="py-3 px-4">14:00 - 16:00</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium">Начальник отдела безопасности</td>
                    <td className="py-3 px-4">Кузнецов К.К.</td>
                    <td className="py-3 px-4">Четверг</td>
                    <td className="py-3 px-4">10:00 - 12:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-gray-700 text-center">
              <p>Предварительная запись на прием осуществляется по телефону: +7 (123) 456-78-90</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
