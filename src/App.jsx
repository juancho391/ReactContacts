import { Contact } from './components/Contact';
import { ContactList } from './components/ContactList';
import { SearchContact } from './components/SearchContact';
import { CreateContact } from './components/CreateContact';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  // Cargar el valor del contador desde localStorage al iniciar la aplicación
 /*  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      setCount(JSON.parse(savedCount));
    }
  }, []);

  // Función para guardar el nuevo valor en localStorage
  const saveCount = (newCount) => {
    localStorage.setItem("count", JSON.stringify(newCount));
    setCount(newCount);
  };
 */

  const defaultContacts = [
    {contactNumber: "3113758380", nameContact: "Mila"},
    {contactNumber: "3117079075", nameContact: "JuanB"},
    {contactNumber: "3002055793", nameContact: "JuanV"}
  ] 

  return (
    <>
    <h1>Welcome to my ContactsApp</h1>
    <SearchContact/>
    <ContactList>
      {defaultContacts.map(contact => (
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

export default App;
