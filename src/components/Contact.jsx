import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Contact({contactNumber, nameContact}){
    return (
        <div>
            <FaPhoneAlt></FaPhoneAlt>
            <p> {nameContact} </p>
            <p> {contactNumber} </p>
            <RiDeleteBin6Line></RiDeleteBin6Line>
        </div>
    );

}


export {Contact}