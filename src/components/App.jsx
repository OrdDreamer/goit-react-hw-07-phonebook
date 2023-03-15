import styles from './app.module.css';
import Section from './Section/Section';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export const App = () => {

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        color: '#010101',
        padding: '50px',
        backgroundColor: 'rgb(231, 236, 242)',
        boxSizing: 'border-box',
      }}
    >
      <div className={styles.phonebook}>
        <Section title={'Phonebook'}>
          <PhonebookForm />
        </Section>
        <Filter />
        <Section title={'Contacts List'}>
          <ContactsList />
        </Section>
      </div>
    </div>
  );
};
