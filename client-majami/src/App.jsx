import React from "react";
import SendEmailForm from "./components/SendEmailForm";
import Welcome from "../src/assets/image-welcome.jpg";
import ImageProduct from "../src/assets/image-product.jpg";

export default function App() {
  return (
    <div className="container">
      <div className="h-screen bg-gray-50 flex items-center">
        <section
          className="w-full bg-cover bg-center py-60"
          style={{ backgroundImage: `url(${Welcome})` }}
        >
          <div className="container mx-auto text-center text-white">
            <h1 className="text-5xl font-medium mb-6">
              Bienvenido a MezquiJab
            </h1>
            <p className="text-xl mb-12">
              En nuestra pagina encontrarás el producto Majami proveniente del
              valle del Mezquital.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 item center">
            <div className="container mx-auto">
              <h2 className="text-2xl font-bold mb-8">Nosotros</h2>
              <p className="mb-4 text-center">
                Somos una empresa comprometida con la tradición y la calidad,
                dedicada a la distribución y comercialización de jarabe de
                aguamiel, un producto 100% natural y exquisito con profundas
                raíces en la cultura del Valle del Mezquital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg">
            <div className="m-8">
              <figure>
                <img
                  src={ImageProduct}
                  alt=""
                  className="aspect-[16/9] abject-cover object-center w-full rounded-md"
                />
              </figure>
            </div>
            <div class="m-8">
              <p className="text-lg text-gray- font-bold text-center">
                La caja contiene 30 sobres de 10 ml cada uno{" "}
              </p>

              <h3>Beneficios</h3>
              <ul className="list-disc mt-6">
                <li>
                  En pequeñas cantidades la mielo no eleva el nivel de azúcar en
                  la sangre debido a que contiene 90% de fructosa{" "}
                </li>
                <li>
                  Previene gastritis y ayuda a tener una flora intestinal sana.
                </li>
                <li>Mejora la digestión</li>
                <li>Alivia la tos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <i class="fas fa-bullseye text-4xl text-blue-500 mb-4"></i>
              <h3 class="text-xl font-semibold mb-2">Misión</h3>
              <p class="text-gray-600 text-center">
                Brindar un endulzante libre de conservadores y aditivos a
                consumidores que tengan como finalidad el mejorar o cuidar su
                salud, empleando un empaque práctico y atractivo para el
                consumidor implementando tecnología moderna que permita mantener
                la calidad del producto.Explicación clara y concisa de la razón
                de ser de la empresa, su propósito fundamental y a quién sirve.
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <i class="far fa-eye text-4xl text-green-500 mb-4"></i>
              <h3 class="text-xl font-semibold mb-2">Visión</h3>
              <p class="text-gray-600 text-center">
                “Ser la marca preferida de endulzantes naturales para nuestros
                consumidores”
              </p>
            </div>
          </div>
        </div>
      </section>

      <SendEmailForm />

      <footer className="bg-green-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-orange-950">
                Correo electrónico: info@tudominio.com
              </p>
              <p className="text-orange-950">Teléfono: +1234567890</p>
              <p className="text-orange-950">
                Dirección: Calle Principal #1234, Ciudad, País
              </p>
            </div>
            <div className="col-span-3 md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition duration-300"
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition duration-300"
                      >
                        Productos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition duration-300"
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition duration-300"
                      >
                        Nosotros
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition duration-300"
                      >
                        <i className="fab fa-facebook"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition duration-300"
                      >
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition duration-300"
                      >
                        <i className="fab fa-instagram"></i> Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
