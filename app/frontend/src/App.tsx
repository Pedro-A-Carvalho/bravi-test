import React from 'react';
// import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PersonDetails from './components/PersonDetails';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';

const App = () => {


  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/person/:id" element={<PersonDetails />} />
          <Route path="/person/:id/contact/create" element={<CreateContact />} />
          <Route path="/person/:id/contact/:cId/edit" element={<EditContact />} />
          <Route path="/" element={<div>Select a person to see details</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
