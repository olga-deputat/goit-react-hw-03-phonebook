import s from './ElementList.module.css';
export const ElementList = ({ contact, handleDeleteContacts }) => {
  return (
    <li className={s.ElemList}>
      <p className={s.TextList}>{contact.name}</p>
      <p className={s.TelList}>{contact.number}</p>
      <button
        type="button"
        onClick={() => handleDeleteContacts(contact.id)}
        className={s.BtnItem}
      >
        Delete
      </button>
    </li>
  );
};
