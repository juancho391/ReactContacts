import React from 'react';
import { Contact } from '../components/Contact';
import { ContactList } from '../components/ContactList';
import { SearchContact } from '../components/SearchContact';
import { ContactContext } from '../context/ContactContext';
import { ContactForm } from '../components/ContactForm';

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
    setSearchValue,
    deleteContact
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
          contactNumber={contact.contactNumber}
          onDelete={()=> deleteContact(contact.nameContact)}/>
        ))}
      </ContactList>
      <ContactForm/>
    </>
  );
}

export {AppUI}
