import styles from './contacts-list.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getSearchQuery } from '../../redux/selectors';

const ContactsList = () => {

  const contacts = useSelector(getContacts);
  const searchQuery = useSelector(getSearchQuery);

  return (
    <ul className={styles.contactsList}>
      {contacts.filter((e) => {
        return e.name.toLowerCase().includes(searchQuery.toLowerCase())
      }).map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={String(id)}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
