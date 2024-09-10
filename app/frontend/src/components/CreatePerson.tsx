import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

interface CreatePersonProps {
    onCreatePerson: (id: number,personData: {name: string}) => void;
}

const CreatePerson = ({onCreatePerson}: CreatePersonProps) => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<'e-mail' | 'telefone' | 'whatsapp'>('e-mail');
  const [contact, setContact] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/person/', {
        name,
      });
      const personId = response.data.id;
      if (contact && type) {
        await axios.post('http://localhost:3001/contact/', {
          type,
          contact,
          description,
          personId,
        });
      }
      onCreatePerson(personId,response.data);
      setRedirect(true);
    } catch (error) {
      console.error('Error creating person:', error);
    }
  };

  if (redirect) {
    return <Navigate to='/' />;
  }

  return (
      <>
    <div className="title-bar">
      <h1>Create Person</h1>
      <Link to='/'><KeyboardReturnIcon/></Link>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
          </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <h3>First Contact(Optional)</h3>
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
            <input type="text" value={contact} onChange={e => setContact(e.target.value)} />
        </div>
        <div>
          <label>
            Description:
          </label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
    </>
  );
};

export default CreatePerson;