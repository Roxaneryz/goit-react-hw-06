import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [filter, setFilter] = useState("");

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("saved-contacts")) ?? initialContacts
  );

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  // console.log(contacts);
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const changeFilter = (value) => {
    setFilter(value);
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
      <ContactForm addContact={addContact} />
      <h3>Find your contact by name or number</h3>
      <SearchBox filter={filter} changeFilter={changeFilter} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
