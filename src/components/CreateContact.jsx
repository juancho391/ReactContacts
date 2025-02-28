import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function CreateContact({ onClick }) {
  return (
    <IoIosAddCircleOutline
      onClick={onClick}
      className="text-white size-10 self-start hover:cursor-pointer hover:size-12"
      type="submit"
    />
  );
}

export { CreateContact };
