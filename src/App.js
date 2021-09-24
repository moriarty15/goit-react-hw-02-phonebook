import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    contacts: [],
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
    };
    this.setState({ contacts: [...this.state.contacts, objd] });
  };
  handleCreateList = () => {
    return (
      <ul>
        {this.state.contacts.map(contact => {
          return (
            <li key={uuidv4()}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <p>Phonebook</p>
        <label>
          {' '}
          Name
          <input
            value={name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <br />
        <label>
          Number
          <input
            type="tel"
            value={number}
            onChange={this.handleNumbers}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <br />
        <button onClick={this.handlePushContact}>Add contact</button>
        <div>
          Contacts
          {this.handleCreateList()}
        </div>
      </div>
    );
  }
}

export default App;
