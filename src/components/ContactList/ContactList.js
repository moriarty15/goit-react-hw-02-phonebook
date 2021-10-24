import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';
import ContactListItem from './ContactListItem';

const ContactList = ({ filter, onDeleteContacts }) => {
  return (
    <ul className="Contact__list">
      {filter.map(({ id, name, number }) => {
        return (
          <li key={id} className="Contact__item">
            <ContactListItem name={name} number={number} />
            <button
              className="button__delete"
              type="button"
              onClick={() => onDeleteContacts(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propType = {
  filter: PropTypes.func.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
