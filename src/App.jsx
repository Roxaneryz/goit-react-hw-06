import { useEffect} from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, selectContacts } from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";




const App = () => {

   const dispatch = useDispatch();
   const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  

  // const [filter, setFilter] = useState("");

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem("saved-contacts")) ?? initialContacts
  // );

  useEffect(() => {

    const savedContacts = JSON.parse(localStorage.getItem("saved-contacts"));

    if (savedContacts) {
      savedContacts.forEach((conatct) => {
        dispatch(addContact(conatct));
     })
   }
  }, [dispatch]);

  // console.log(contacts);
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

   const handleChangeFilter = (value) => {
     dispatch(changeFilter(value));
   };
  const filteredContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };
  console.log(filteredContacts());
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm addContact={handleAddContact} />
      <h3>Find your contact by name or number</h3>
      <SearchBox filter={filter} changeFilter={handleChangeFilter} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
