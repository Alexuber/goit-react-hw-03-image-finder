import styles from './ContactsListItem.module.scss';
import { Delete } from '../Delete/Delete';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, deleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}: </span>
      <span>{number}</span>
      <Delete deleteContact={deleteContact} />
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
