import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Person } from '../interfaces/Person';

const Sidebar = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('http://localhost:3001/person/');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    fetchPeople();
  }, []);
  return (
    <div className="sidebar">
      <div className='sidebar-buttons'>
            <Link to='/person/create'>+</Link>
      </div>
      <div className='sidebar-list'>
        <ul>
        {people.map(person => (
          <li key={person.id}>
            <Link to={`/person/${person.id}`}>{person.name}</Link>
          </li>
        ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Sidebar;