import React from "react";
import { ContactContext } from "../context/ContactContext";

function SearchContact() {
  const { searchValue, setSearchValue } = React.useContext(ContactContext);

  return (
    <input
      className="text-black place-content-center my-3 bg-white rounded-2xl w-1/2 text-center"
      type="text"
      placeholder="Buscar Contacto"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { SearchContact };
