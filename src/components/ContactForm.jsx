import React from "react";
import { CreateContact } from "./CreateContact";

function ContactForm(){
    return (
        <div>
            <input 
            type="text" 
            placeholder="Ingresa el nombre del contacto"
             />
             <input
             type="text"
             placeholder="Ingresa nuevo numero"/> 
             <CreateContact/>
        </div>
    )
}


export {ContactForm}