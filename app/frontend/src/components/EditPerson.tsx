import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

interface EditPersonProps {
    onUpdatePerson: (id: number, updatedData: {name: string}) => void;
}

const EditPerson = ({onUpdatePerson}: EditPersonProps) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/person/${id}`);
        setName(response.data.name);
      } catch (error) {
        console.error('Error fetching person:', error);
      }
    };

    fetchPerson();
  }, [id]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUpdatePerson = async () => {
    try {
      onUpdatePerson(parseInt(id as string), {name});
      navigate(`/person/${id}`);
    } catch (error) {
      console.error('Error updating person:', error);
    }
  };

  return (
    <>
      <div className="title-bar">
      <h1>Edit Person</h1>
      <Link to={`/person/${id}`}><KeyboardReturnIcon/></Link>
      </div>
      <div className='content'>
      <form>
        <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleUpdatePerson}>Update</button>
      </div>
      </form>
      </div>
    </>
  );
};

export default EditPerson;