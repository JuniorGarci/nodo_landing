import { useTypewriter } from 'react-simple-typewriter';
import { useState, useEffect, useRef } from 'react';
import { FaPlus, FaMinus, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importa los iconos que necesites
import image1 from './images/image1.png';
import ana from './images/ana.png';
import juan from './images/juan.jpg';
import carlos from './images/carlos.jpg';
import nodo from './images/nodo.png';

const LandingPage = () => {
  const [text] = useTypewriter({
    words: [
      'Solicita tu Préstamo de Manera Simple y Rápida',
      'Accede a Financiamiento Personalizado',
      'Obtén Condiciones Flexibles para tu Préstamo'
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 2000,
    onLoopDone: () => {
      window.scrollTo({
        top: scrollRef.current,
        behavior: 'smooth'
      });
    }
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const scrollRef = useRef(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cómo solicito un préstamo?',
      answer: 'Debes completar la solicitud en línea proporcionando tus datos personales y seleccionando el monto y el plazo.'
    },
    {
      question: '¿Cuánto tiempo tarda en aprobarse un préstamo?',
      answer: 'El tiempo de aprobación varía, pero generalmente se realiza dentro de las 24 horas posteriores a la solicitud.'
    },
    {
      question: '¿Qué requisitos necesito cumplir?',
      answer: 'Debes ser mayor de 18 años y tener una cuenta bancaria activa. Otros requisitos dependerán del prestamista.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
     
      <header className="bg-white shadow-md py-1">
        <div className="container mx-auto flex justify-between items-center px-6">
        <img src={nodo} alt="NODO" className=" w-11 h-10  " />
          <nav>
            <a href="#how-it-works" className="text-[#27403D] hover:text-[#E0793F] mx-2">Cómo Funciona</a>
            <a href="https://ui-nodo-dev.azurewebsites.net/login" target="_blank" rel="noopener noreferrer" className="bg-[#E0793F] text-white px-3.5 py-2 rounded-md hover:bg-orange-600 text-xs sm:text-base md:text-lg">Iniciar Sesión</a>
          </nav>
        </div>
      </header>

      
      <main className="flex-grow">
        <section className="bg-white py-5">
          <div className="container mx-auto text-center">
          
            <img
              src={image1}
              alt="imagen"
              className="mx-auto mb-6 md:w-1/3 lg:w-1/4 sm:w-1/2 h-auto"
            />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-[#27403D] mb-6">{text}</h2>
              <p className="text-gray-600 mb-12">Accede a préstamos con condiciones personalizadas y obtén el financiamiento que necesitas.</p>
              <a href="https://ui-nodo-dev.azurewebsites.net/registre" className="bg-[#E0793F] text-white py-3 px-8 rounded-full hover:bg-orange-600 text-lg">Iniciar Solicitud</a>
            </div>
          </div>
        </section>

        
        <section id="how-it-works" className="bg-gray-100 py-16 z-30">
          <div className="container mx-auto z-40">
            <h3 className="text-3xl font-bold text-center text-[#27403D] mb-8">¿Cómo Funciona?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
              <div className="text-center">
                <div className="text-[#E0793F] text-6xl mb-4">1</div>
                <h4 className="text-xl font-bold text-[#27403D] mb-2">Completa tu Solicitud</h4>
                <p className="text-gray-600">Proporciona tus datos y selecciona el monto y el plazo.</p>
              </div>
             
              <div className="text-center">
                <div className="text-[#E0793F] text-6xl mb-4">2</div>
                <h4 className="text-xl font-bold text-[#27403D] mb-2">Recibe Ofertas</h4>
                <p className="text-gray-600">Recibe ofertas de prestamistas según tus condiciones.</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#E0793F] text-6xl mb-4">3</div>
                <h4 className="text-xl font-bold text-[#27403D] mb-2">Obtén tu Préstamo</h4>
                <p className="text-[#27403D]">Acepta la mejor oferta y recibe tu dinero de forma rápida.</p>
              </div>
            </div>
          </div>
        </section>

       
        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#27403D] mb-8">Testimonios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-14 rounded-lg shadow-md">
                <img src={juan} alt="Juan P." className="rounded-full w-20 h-20 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Gracias a Nodo pude obtener el préstamo que necesitaba con una tasa increíble.</p>
                <h4 className="text-[#27403D] font-bold">Juan Perez</h4>
              </div>
              <div className="bg-gray-50 p-14 rounded-lg shadow-md">
                <img src={ana} alt="Ana L." className="rounded-full w-20 h-20 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">El proceso fue rápido y sin complicaciones. Muy recomendable.</p>
                <h4 className="text-[#27403D] font-bold">Ana Borges</h4>
              </div>
              <div className="bg-gray-50 p-14 rounded-lg shadow-md">
                <img src={carlos} alt="Carlos G." className="rounded-full w-20 h-20 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Recibí ofertas personalizadas y pude escoger la mejor para mí.</p>
                <h4 className="text-[#27403D] font-bold">Carlos Gil</h4>
              </div>
            </div>
          </div>
        </section>

      
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center text-[#27403D] mb-8">Preguntas Frecuentes</h3>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full text-left py-4 px-6 bg-white shadow-md rounded-md focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-[#27403D]">{faq.question}</span>
                    {activeFaq === index ? <FaMinus className="text-[#E0793F]" /> : <FaPlus className="text-[#E0793F]" />}
                  </button>
                  {activeFaq === index && (
                    <div className="mt-2 p-4 bg-gray-200 rounded-md">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

     
      <footer className="bg-[#27403D] text-white py-4">
        <div className="container mx-auto text-center">
          <div className="mb-2 flex align-middle justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaFacebook className="text-xl hover:text-[#E0793F]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaTwitter className="text-xl hover:text-[#E0793F]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaInstagram className="text-xl hover:text-[#E0793F]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaLinkedin className="text-xl hover:text-[#E0793F]" />
            </a>
          </div>
          <div className="mt-3">
            <a href="#privacidad" className="text-white hover:text-[#E0793F] mx-2">Política de Privacidad</a>
            <a href="#terminos" className="text-white hover:text-[#E0793F] mx-2">Términos de Uso</a>
          </div>
          <p className="text-sm">© 2024 Nodo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

