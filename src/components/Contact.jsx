import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Contact({ contactNumber, nameContact, onDelete }) {
  return (
    <div className="flex flex-row justify-evenly items-center my-3 rounded-2xl w-full">
      <FaPhoneAlt className="text-white hover:cursor-pointer hover:size-5"></FaPhoneAlt>
      <p className="text-white"> {nameContact} </p>
      <p className="text-white"> {contactNumber} </p>
      <RiDeleteBin6Line
        className="text-white hover:cursor-pointer hover:size-5"
        onClick={onDelete}
      ></RiDeleteBin6Line>
    </div>
  );
}

export { Contact };
