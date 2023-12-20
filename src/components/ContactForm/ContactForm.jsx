import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContactAction } from '../../redux/contacts/operations';
import { Form } from './ContactForm.styled';
import { Button, TextField } from '@mui/material';

const ContactForm = ({ sumbit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactAction({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        color="secondary"
        id="standard-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />

      <TextField
        color="secondary"
        id="standard-basic"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        required
      />
      <Button variant="outlined" color="secondary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
