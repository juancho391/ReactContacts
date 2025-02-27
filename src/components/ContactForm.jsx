import React from "react";
import { CreateContact } from "./CreateContact";
import { ContactContext } from "../context/ContactContext";

function ContactForm() {
  const { addContact } = React.useContext(ContactContext);

  const [newContactValue, setContactValue] = React.useState("");

  return (
    <form className="flex items-center flex-col border-amber-50 rounded-2xl w-1/2 p-3">
      <input
        className="border-amber-50 text-black my-3 bg-white rounded-2xl w-full text-center"
        type="text"
        placeholder="Ingresa el nombre del contacto"
      />
      <input
        className="border-amber-50 text-black my-3 bg-white rounded-2xl w-full text-center"
        type="text"
        placeholder="Ingresa nuevo numero"
      />
      <CreateContact type="submit" />
    </form>
  );
}

export { ContactForm };
