import React from "react";
import { AppUI } from "./AppUI";
import { ContactProvider } from "../context/ContactContext";

function App(){

  return (
    <ContactProvider>
      <AppUI/>
    </ContactProvider>
  );
}

export {App}