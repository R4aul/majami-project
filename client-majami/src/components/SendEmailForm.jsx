import { useState } from "react";
import { SendContactRequest } from "../services/ContactServices";

export default function SendEmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      text,
    };

    
    try {
      let response = await SendContactRequest(data);
      console.log(response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu mensaje se envio correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
      setEmail("")
      setText("")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.",
      });
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <h5 className="text-lg font-bold m-6">Contacto</h5>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Nombre Completo
        </label>
        <input
          type="text"
          placeholder="Escribe tu nombre completo"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Correo
        </label>
        <input
          type="email"
          placeholder="Escribe tu dirección de correo electrónico"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Mensaje
        </label>
        <textarea
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500"
          value={text}
          placeholder="Escribe tu mensaje"
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
