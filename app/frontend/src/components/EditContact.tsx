import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Contact } from '../interfaces/Contact';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

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
    <>
        
    <div className="title-bar">
      <h1>Edit Contact</h1>
      <Link to={`/person/${id}`}><KeyboardReturnIcon/></Link>
      </div>
      <div className="content">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Type:
          </label>
            <select value={type} onChange={e => setType(e.target.value as 'e-mail' | 'telefone' | 'whatsapp')}>
              <option value="e-mail">E-mail</option>
              <option value="telefone">Telefone</option>
              <option value="whatsapp">Whatsapp</option>
            </select>
        </div>
        <div>
          <label>
            Contact:
          </label>
            <input className='input context' type="text" value={contact} onChange={e => setContact(e.target.value)} />
        </div>
        <div>
          <label>
            Description:
          </label>
            <input className='input description' type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
    </>
    );
};

export default EditContact;