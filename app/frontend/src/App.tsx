import React, { useEffect, useState } from 'react';
import './styles/app.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import PersonDetails from './components/PersonDetails';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';
import { Person } from './interfaces/Person';
import CreatePerson from './components/CreatePerson';
import EditPerson from './components/EditPerson';
import Bravi from './components/Bravi';

const App = () => {
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

  const handleCreatePerson = async (id: number,personData: {name:string}) => {
    try {
      setPeople([...people, {id, ...personData}]);
    } catch (error) {
      console.error('Error creating person:', error);
    }
  };

  const handleUpdatePerson = async (id: number, updatedData: {name:string}) => {
    try {
      const response = await axios.put(`http://localhost:3001/person/${id}`, updatedData);
      setPeople(people.map(person => (person.id === id ? response.data : person)));
    } catch (error) {
      console.error('Error updating person:', error);
    }
  };

  const handleDeletePerson = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/person/${id}`);
      setPeople(people.filter(person => person.id !== id));
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  return (
    <div className="app">
      <Sidebar people={people} />
      <div className="main-content">
        <Routes>
          <Route path="/person/:id" element={<PersonDetails onDeletePerson={handleDeletePerson} />} />
          <Route path="/person/create" element={<CreatePerson onCreatePerson={handleCreatePerson} />} />
          <Route path="/person/:id/edit" element={<EditPerson onUpdatePerson={handleUpdatePerson} />} />
          <Route path="/person/:id/contact/create" element={<CreateContact />} />
          <Route path="/person/:id/contact/:cId/edit" element={<EditContact />} />
          <Route path="/" element={<div></div>} />
        </Routes>
      </div>
      <Bravi />
    </div>
  );
};

export default App;
