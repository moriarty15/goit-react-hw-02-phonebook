import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handlePushContact = () => {
    if (this.state.name.trim() === '') return;
    this.setState({ contacts: [...this.state.contacts, this.state.name] });
  };
  handleCreateList = () => {
    return (
      <ul>
        {this.state.contacts.map(contact => {
          return <li key={uuidv4()}>{contact}</li>;
        })}
      </ul>
    );
  };
  render() {
    const { name } = this.state;
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
