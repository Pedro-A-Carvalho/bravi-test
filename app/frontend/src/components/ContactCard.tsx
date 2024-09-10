import React from 'react';
import { Contact } from '../interfaces/Contact';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';


interface ContactCardProps {
  contact: Contact;
  handleDelete: () => void;
}

export default function ContactCard({ contact, handleDelete }: ContactCardProps) {
  
  return (
  <div className="contact-card">
    <div>
      <p>{contact.type}: {contact.contact}</p>
      <p>{contact.description}</p>
    </div>
    <div className='card-actions'>
      <Link to={`/person/${contact.personId}/contact/${contact.id}/edit`}><EditNoteIcon/></Link>
      <button className='button' onClick={handleDelete}><DeleteForeverIcon/></button>
    </div>
  </div>

  );
}

