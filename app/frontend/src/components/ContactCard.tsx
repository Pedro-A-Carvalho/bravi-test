import React from 'react';
import { Contact } from '../interfaces/Contact';
import { Link } from 'react-router-dom';

interface ContactCardProps {
  contact: Contact;
  handleDelete: () => void;
}

const ContactCard = ({ contact, handleDelete }: ContactCardProps) => {
  return (
    <div className="contact-card">
      <div>
        <p>{contact.type}: {contact.contact}</p>
        <p>{contact.description}</p>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/person/${contact.personId}/contact/${contact.id}/edit`}>Edit</Link>
      </div>
    </div>
  );
};

export default ContactCard;
