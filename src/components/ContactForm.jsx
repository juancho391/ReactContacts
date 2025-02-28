import React, { useContext } from "react";
import { CreateContact } from "./CreateContact";
import { ContactContext } from "../context/ContactContext";

function ContactForm() {
  const { addContact } = useContext(ContactContext);
  const [newNumberValue, setNewNumberValue] = React.useState("");
  const [newNameValue, setNewNameValue] = React.useState("");

  const onChangeName = (event) => {
    setNewNameValue(event.target.value);
  };
  const onChangeNumber = (event) => {
    setNewNumberValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Ejecutando funcion onSubmit");
    addContact(newNameValue, newNumberValue);
  };

  return (
    <form className="flex items-center flex-col border-amber-50 rounded-2xl w-1/2 p-3">
      <input
        onChange={onChangeName}
        className="border-amber-50 text-black my-3 bg-white rounded-2xl w-full text-center"
        type="text"
        placeholder="Ingresa el nombre del contacto"
      />
      <input
        onChange={onChangeNumber}
        className="border-amber-50 text-black my-3 bg-white rounded-2xl w-full text-center"
        type="text"
        placeholder="Ingresa nuevo numero"
      />
      <CreateContact type="submit" onClick={onSubmit} />
    </form>
  );
}

export { ContactForm };
