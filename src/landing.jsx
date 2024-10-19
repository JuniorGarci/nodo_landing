

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-[#E0793F]">Nodo</h1>
          <nav>
            <a href="#how-it-works" className="text-gray-800 hover:text-[#E0793F] mx-4">
              Cómo Funciona
            </a>
            <a href="#contact" className="text-gray-800 hover:text-[#E0793F] mx-4">
              Contacto
            </a>
            <a href="https://ui-nodo-dev.azurewebsites.net/login" target="_blank" className="bg-[#E0793F] text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Iniciar Sesión
            </a>
            
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow">
        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Solicita tu Préstamo de Manera Simple y Rápida
            </h2>
            <p className="text-gray-600 mb-12">
              Accede a préstamos con condiciones personalizadas y obtén el financiamiento que necesitas.
            </p>
            <a
              href="#apply"
              className="bg-[#E0793F] text-white py-3 px-8 rounded-full hover:bg-orange-600 text-lg"
            >
              Iniciar Solicitud
            </a>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">¿Cómo Funciona?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="text-[#E0793F] text-6xl mb-4">1</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Completa tu Solicitud</h4>
                <p className="text-gray-600">Proporciona tus datos y selecciona el monto y el plazo.</p>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div className="text-[#E0793F] text-6xl mb-4">2</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Recibe Ofertas</h4>
                <p className="text-gray-600">Recibe ofertas de prestamistas según tus condiciones.</p>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <div className="text-[#E0793F] text-6xl mb-4">3</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Obtén tu Préstamo</h4>
                <p className="text-gray-600">Acepta la mejor oferta y recibe tu dinero de forma rápida.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Testimonios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">Gracias a Nodo pude obtener el préstamo que necesitaba con una tasa increíble.</p>
                <h4 className="text-gray-800 font-bold">Juan P.</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">El proceso fue rápido y sin complicaciones. Muy recomendable.</p>
                <h4 className="text-gray-800 font-bold">Ana L.</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">Recibí ofertas personalizadas y pude escoger la mejor para mí.</p>
                <h4 className="text-gray-800 font-bold">Carlos G.</h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nodo. Todos los derechos reservados.</p>
          <div className="mt-4">
            <a href="#privacy" className="text-white hover:text-gray-400 mx-2">Política de Privacidad</a>
            <a href="#terms" className="text-white hover:text-gray-400 mx-2">Términos y Condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
