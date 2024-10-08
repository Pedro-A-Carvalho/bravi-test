import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const CreateContact = () => {
  const { id } = useParams();
  const [type, setType] = useState<'e-mail' | 'telefone' | 'whatsapp'>('e-mail');
  const [contact, setContact] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/contact/', {
        type,
        contact,
        description,
        personId: id,
      });
      setRedirect(true);
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  if (redirect) {
    return <Navigate to={`/person/${id}`} />;
  }

  return (
    <>
    <div className="title-bar">
      <h1>Create Contact</h1>
      <Link to={`/person/${id}`}><KeyboardReturnIcon/></Link>
    </div>
    <div className="content">
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
        <button type="submit">Create</button>
      </form>
    </div>
  </>
  );
};

export default CreateContact;
