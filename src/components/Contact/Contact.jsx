import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


export default function Contact({contact}) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p><IoPerson className={css.icon} size="14" />{contact.name}</p>
        <p><FaPhone className={css.icon} size="14" />{contact.number}</p> 
      </div>
      
      <button className={css.button}
        type='button'
        onClick={() => dispatch(deleteContact(contact.id))
      } >Delete</button>
    </div>
  )

} 