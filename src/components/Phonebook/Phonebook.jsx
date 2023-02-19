import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import styles from './Phonebook.module.scss';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class Phonebook extends Component {
  state = {
    ...INITIAL_STATE,
  };

  addNewContact = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    const normalizedNames = contacts.map(contact => contact.name.toLowerCase());
    const allTelephones = contacts.map(contact => contact.number);

    if (normalizedNames.includes(name.toLowerCase())) {
      alert(`${name} already in contacts`);
      return;
    } else if (allTelephones.includes(number)) {
      alert(`${number} already in contacts`);
      return;
    }
    const newContact = { ...data, id: nanoid(8) };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contatcs !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const {
      addNewContact,
      changeFilter,
      deleteContact,
      state: { filter, contacts },
    } = this;
    const filtered = this.getFilteredContacts();

    return (
      <section>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} contacts={contacts} />
        <h2 className={styles.contactsTitle}>Contacts</h2>
        <Filter onChangeFilter={changeFilter} value={filter} />
        <ContactList contacts={filtered} deleteContact={deleteContact} />
      </section>
    );
  }
}
