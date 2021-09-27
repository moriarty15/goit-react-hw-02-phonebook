import React, { Component } from 'react';

class ContractForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleAllInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleS = e => {
    e.preventDefault();
  };
  // функция записи новых абонентов в телефонную книгу
  handlePushContact = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') return;

    this.props.onSubmit(this.state);
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handlePushContact}>
          <label>
            Name
            <input
              value={name}
              onChange={this.handleAllInputChange}
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
              onChange={this.handleAllInputChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContractForm;
