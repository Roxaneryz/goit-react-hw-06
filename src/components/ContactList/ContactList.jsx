import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleDelContact = (id) => {
    dispatch(deleteContact(id));
  }
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
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
