import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styles from './ContactsForm.module.scss';
import { object, string, number } from 'yup';

let schema = object({
  name: string()
    .required('Name is required')
    .min(3, 'Too Short!')
    .max(24, 'Too Long!')
    .trim(),
  number: number()
    .typeError('Must be a number')
    .required('Number is required')
    .positive('Number must be a positive')
    .integer('Number must be a integer'),
});

const INITIAL_STATE = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      render={message => <p className={styles.FormError}>{message}</p>}
    />
  );
};

export const ContactForm = ({ addNewContact }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    addNewContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_STATE}
      onSubmit={handleFormSubmit}
      validationSchema={schema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="tel">
          Name
        </label>
        <Field
          className={styles.input}
          name="name"
          type="text"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name..."
        />
        <FormError name="name" />
        <label className={styles.label} htmlFor="tel">
          Number
        </label>
        <Field
          className={styles.input}
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone..."
        />
        <FormError name="number" />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
