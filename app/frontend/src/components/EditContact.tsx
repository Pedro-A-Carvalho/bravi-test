import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Contact } from '../interfaces/Contact';

const EditContact = () => {
  const { id, cId } = useParams();
  const [type, setType] = useState<'e-mail' | 'telefone' | 'whatsapp'>('e-mail');
  const [contact, setContact] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/contact/${cId}`);
        const contact = response.data as Contact;
        setType(contact.type);
        setContact(contact.contact);
        setDescription(contact.description);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [cId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/contact/${cId}`, {
        type,
        contact,
        description,
        personId: id,
      });
      setRedirect(true);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  if (redirect) {
    return <Navigate to={`/person/${id}`} />;
  }

  return (
    <div className="create-contact">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Type:
            <select value={type} onChange={e => setType(e.target.value as 'e-mail' | 'telefone' | 'whatsapp')}>
              <option value="e-mail">E-mail</option>
              <option value="telefone">Telefone</option>
              <option value="whatsapp">Whatsapp</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Contact:
            <input type="text" value={contact} onChange={e => setContact(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </label>
        </div>
        <button type="submit">Save</button>
        <Link to={`/person/${id}`}>Cancel</Link>
      </form>
    </div>
    );
};

export default EditContact;