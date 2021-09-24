import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import HandleCreateList from './components/ContactList';
import Filter from './components/Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleNumbers = e => {
    this.setState({ number: e.currentTarget.value });
  };
  handlePushContact = () => {
    if (this.state.name.trim() === '') return;
    const objd = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.setState({ contacts: [...this.state.contacts, objd] });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleInputChange}
          onChange1={this.handleNumbers}
        />
        <br />
        <button onClick={this.handlePushContact}>Add contact</button>
        <div>
          <h2>Contacts</h2>
          <br />
          <Filter filter={filter} onChange={this.changeFilter} />
          <HandleCreateList f={visibleContacts} />
        </div>
      </div>
    );
  }
}

export default App;
