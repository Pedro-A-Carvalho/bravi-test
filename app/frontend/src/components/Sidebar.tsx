import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../interfaces/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

interface SidebarProps {
  people: Person[];
}

const Sidebar = ({people}: SidebarProps) => {

  return (
    <div className="sidebar">
      <div className='sidebar-title'>
        <h1 className='title'>Agenda</h1>
        <Link to='/person/create' className='create-person'><PersonAddAltIcon /></Link>
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