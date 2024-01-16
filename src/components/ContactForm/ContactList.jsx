import { ElementList } from 'components/ElementList/ElementList';
import s from './ContactList.module.css';
export const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(contact => {
        return (
          <ElementList
            key={contact.id}
            contact={contact}
            handleDeleteContacts={handleDeleteContacts}
          />
        );
      })}
    </ul>
  );
};
