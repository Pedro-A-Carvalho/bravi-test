import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PersonWithContacts } from '../interfaces/Person';
import axios from 'axios';
import ContactCard from './ContactCard';
import { Contact } from '../interfaces/Contact';

const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<PersonWithContacts>();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/person/${id}`);
        setPerson(response.data);
        setContacts(response.data.contacts);
      } catch (error) {
        console.error('Error fetching person:', error);
      }
    };

    fetchPerson();
  }, [id]);

  const handleDeleteContact = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/contact/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="person-details">
      {person ? (
        <>
          <h2>{person.name}</h2>
          <h3>Contacts</h3>
          <Link to={`/person/${id}/contact/create`}>Add Contact</Link>
          {contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} handleDelete={() => handleDeleteContact(contact.id)}  />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PersonDetails;