import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PersonWithContacts } from '../interfaces/Person';
import axios from 'axios';
import ContactCard from './ContactCard';
import { Contact } from '../interfaces/Contact';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';

interface PersonDetailsProps {
  onDeletePerson: (id: number) => void;
}

const PersonDetails = ({onDeletePerson}: PersonDetailsProps) => {
  const { id } = useParams();
  const [person, setPerson] = useState<PersonWithContacts>();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const navigate = useNavigate();

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

  const handleDeletePerson = async (pId: number) => {
    try {
      await onDeletePerson(pId);
      navigate('/');
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  return (
    <div>
      {person ? (
        <>
          <div className='title-bar'>
            <h1 className='title-name'>{person.name}</h1>
            <div className='actions'>
              <Link to={`/person/${id}/edit`}><EditNoteIcon fontSize='large'/></Link>
              <button className='button' onClick={() => handleDeletePerson(person.id)}><DeleteForeverIcon fontSize='large' /></button>
            </div>
          </div>
          <div className='content'>
            <div className='contact-title'>
              <h1>Contatos</h1>
              <Link to={`/person/${id}/contact/create`}><AddIcCallIcon /></Link>
            </div>
            <div className='contact-list'>
            {contacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} handleDelete={() => handleDeleteContact(contact.id)}  />
            ))}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PersonDetails;