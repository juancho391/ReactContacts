import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ContactContext = React.createContext();

function ContactProvider({ children }) {
  // Usa localStorage para guardar contactos
  const { item: contacts, saveItem: saveContact } = useLocalStorage('CONTACTS_V1', []);

  // Estado para el valor de busqueda
  const [searchValue, setSearchValue] = React.useState(""); // Inicia como cadena vacía

  // Funcion para buscar contactos
  const searchContacts = contacts.filter((contact) => {
    return contact.nameContact.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <ContactContext.Provider
      value={{
        searchContacts,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export { ContactContext, ContactProvider };
