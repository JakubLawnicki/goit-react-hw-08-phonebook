import { addContact } from 'redux/operations';
import styles from './contactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const newContact = {
    name,
    number,
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = newContact;
    const form = e.target;
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        return alert(contact.name + ' is already in contacts.');
      }
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="form">
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        className={styles['input-name']}
        onChange={e => {
          setName(e.target.value);
        }}
        type="text"
        name="name"
        id="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={styles.label} htmlFor="number">
        Number
      </label>
      <input
        className={styles['input-tel']}
        onChange={e => {
          setNumber(e.target.value);
        }}
        type="tel"
        name="number"
        id="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
