import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ContactContext = React.createContext();

function ContactProvider({ children }) {
  // Usa localStorage para guardar contactos
  const { item: contacts, saveItem: saveContact } = useLocalStorage(
    "CONTACTS_V1",
    []
  );

  // Estado para el valor de busqueda
  const [searchValue, setSearchValue] = React.useState(""); // Inicia como cadena vacía

  // Funcion para buscar contactos
  const searchContacts = contacts.filter((contact) => {
    return contact.nameContact
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  const deleteContact = (name) => {
    const newContacts = contacts.filter(
      (contact) => contact.nameContact !== name
    );
    saveContact(newContacts);
  };

  const addContact = (event) => {
    console.log("Agregando Contact con funcion");
  };

  return (
    <ContactContext.Provider
      value={{
        searchContacts,
        searchValue,
        setSearchValue,
        deleteContact,
        addContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export { ContactContext, ContactProvider };
