import PropTypes from 'prop-types';

export default function ContactListItem(props) {
  const { name, number } = props;
  return (
    <>
      <span>{name}: </span>
      <span>{number} </span>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
