// import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from './contactForm/ContactForm';
// import { ContactList } from './contactList/ContactList';
// import { Filter } from './filter/Filter';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './navigation/Navigation';
import { Home } from './home/Home';
import { Register } from './register/Register';
import { Login } from './login/Login';
import { Contacts } from './contacts/Contacts';

export function App() {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
        margin: 40,
        paddingLeft: 40,
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      <ContactList /> */}
    </div>
  );
}
