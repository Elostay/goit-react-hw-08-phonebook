import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Title, SubTitle, Container } from './ContactForm/ContactForm.styled';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
	
	return (
	  <>
	  
	  <Routes>
				<Route path='/' element={}>

				</Route>
				<Route path='*' element={<Navigate to="/" />} />
	  </Routes>
	  </>
   //  <Container>
   //    <Title>Phonebook</Title>
   //    <ContactForm />
   //    <SubTitle>Contacts</SubTitle>
   //    <Filter />
   //    <ContactList />
   //  </Container>
  );
};

export default App;
