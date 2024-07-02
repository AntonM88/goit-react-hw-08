import { useSelector, useDispatch } from "react-redux";
import s from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <Contact
          item={contact}
          key={contact.id}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};
