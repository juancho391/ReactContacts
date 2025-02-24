import React from "react";

//Context para los contactos 
const ContactContext = React.createContext();

function ContactProvider({children}){
    const {item, saveItem} = useLocalStorage("CONTACTS_V1", []);
}