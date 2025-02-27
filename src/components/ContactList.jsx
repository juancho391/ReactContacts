import React from "react";

function ContactList({ children }) {
  return <ul className="list-none py-2 flex-row w-1/2">{children}</ul>;
}

export { ContactList };
