import SendEmailForm from "./components/SendEmailForm";
import Welcome from "../src/assets/image-welcome.jpg";
import ImageProduct from "../src/assets/image-product.jpg";

export default function App() {
  return (
    <div className="container mx-auto">
      {/* Sección de Bienvenida */}
      <div className="h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${Welcome})` }}>
        <section className="w-full py-60 bg-black bg-opacity-50 text-center text-white">
          <h1 className="text-5xl font-semibold mb-6">Bienvenido a MezquiJab</h1>
          <p className="text-xl mb-8">Encuentra el producto Majami del Valle del Mezquital.</p>
        </section>
      </div>

      {/* Sección Nosotros */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Nosotros</h2>
            <p className="mb-4">
              Somos una empresa comprometida con la tradición y la calidad, dedicada a la distribución y comercialización de jarabe de aguamiel.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Producto */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <img src={ImageProduct} alt="Producto Majami" className="w-full h-auto rounded-md" />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <p className="text-lg font-semibold text-center mb-4">
                La caja contiene 30 sobres de 10 ml cada uno.
              </p>
              <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
              <ul className="list-disc ml-6">
                <li>No eleva el nivel de azúcar en la sangre.</li>
                <li>Previene gastritis y ayuda a una flora intestinal sana.</li>
                <li>Mejora la digestión.</li>
                <li>Alivia la tos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <i className="fas fa-bullseye text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Misión</h3>
              <p className="text-gray-600">
                Brindar un endulzante natural y de calidad, manteniendo la tradición y la salud de nuestros consumidores.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <i className="far fa-eye text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Visión</h3>
              <p className="text-gray-600">
                Ser la marca preferida de endulzantes naturales para nuestros consumidores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Envío */}
      <SendEmailForm />

      {/* Footer */}
      <footer className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p>Correo: mezquijab@gmail.com</p>
              <p>Teléfono: +7721692477</p>
              <p>Dirección: MezquiJab S.A de C.V,  capula ixmiquilpan hgo.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul>
                <li><a href="#" className="hover:text-blue-500 transition">Inicio</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Productos</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Servicios</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Nosotros</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
              <ul>
                <li><a href="https://www.instagram.com/mezquijab_/profilecard/?igsh=MTYybnRoZ2N6ZnR1NQ==" className="hover:text-blue-500 transition"><i className="fab fa-instagram"></i> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
