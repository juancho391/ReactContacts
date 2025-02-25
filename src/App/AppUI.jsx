import React from 'react';
import { Contact } from '../components/Contact';
import { ContactList } from '../components/ContactList';
import { SearchContact } from '../components/SearchContact';
import { CreateContact } from '../components/CreateContact';
import { ContactContext } from '../context/ContactContext';

function AppUI() {

  // const defaultContacts = [
  //   {contactNumber: "3113758380", nameContact: "Mila"},
  //   {contactNumber: "3117079075", nameContact: "JuanB"},
  //   {contactNumber: "3002055793", nameContact: "JuanV"}
  // ] 

  // localStorage.setItem("CONTACTS_V1", JSON.stringify(defaultContacts));


  const {
    searchContacts,
    searchValue,
    setSearchValue
  } = React.useContext(ContactContext)
  return (
    <>
      <h1>Welcome to my ContactsApp</h1>

      <SearchContact/>
      <ContactList>
        {searchContacts.map(contact => (
          <Contact 
          key={contact.contactNumber}
          nameContact={contact.nameContact}
          contactNumber={contact.contactNumber}/>
        ))}
      </ContactList>
      <CreateContact/>
    </>
  );
}

export {AppUI}
