
import { FaUserAlt, FaPhoneVolume } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


import css from "./Contact.module.css"



const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  
  
  const handleClick = () => {
    dispatch(deleteContact(id));
    }

  return (
    <div className={css.contact}>
      <p>
        <FaUserAlt />: {name}{" "}
      </p>

      <p>
        <FaPhoneVolume size = '24'/>: {number}
      </p>

      <button type="button" onClick={handleClick}> Delete</button>
    </div>
  );
}

export default Contact