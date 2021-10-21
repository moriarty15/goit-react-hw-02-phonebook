import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ f, onDeleteContacts }) => {
  return (
    <ul className="Contact__list">
      {f.map(({ id, name, number }) => {
        return (
          <li key={id} className="Contact__item">
            {name}: {number}{' '}
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
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
