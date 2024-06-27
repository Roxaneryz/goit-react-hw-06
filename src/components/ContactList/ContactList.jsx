import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

// const contacts = useSelector((state) => state.contacts.items);
  const filteredContacts = contacts.filter((contact) => {
    contact.name.toLowerCase().includes(filter.toLowerCase())
  });

  const handleDelContact = (id) => {
    dispatch(deleteContact(id));
  }
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactLiItem} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={()=>handleDelContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
