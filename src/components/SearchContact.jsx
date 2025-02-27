import React from "react";
import { ContactContext } from "../context/ContactContext";

function SearchContact(){

    const {
        searchValue,
        setSearchValue
    } = React.useContext(ContactContext)

    return(
        <input type="text"
               placeholder="Buscar Contacto" 
               value={searchValue} 
               onChange={(event)=>{
                setSearchValue(event.target.value);
        }}
         />
    );
}

export {SearchContact}