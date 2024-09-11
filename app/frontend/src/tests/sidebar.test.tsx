import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Person } from '../interfaces/Person';

const mockPeople: Person[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

describe('Sidebar', () => {
  test('renders the Sidebar component', () => {
    render(
      <Router>
        <Sidebar people={mockPeople} />
      </Router>
    );

    // Check if the title is rendered
    expect(screen.getByText('Agenda')).toBeInTheDocument();

    // Check if the create person link is rendered
    expect(screen.getByRole('link', { name: /create-person/i })).toBeInTheDocument();

    // Check if the list of people is rendered
    mockPeople.forEach(person => {
      expect(screen.getByText(person.name)).toBeInTheDocument();
    });
  });

  test('renders links for each person', () => {
    render(
      <Router>
        <Sidebar people={mockPeople} />
      </Router>
    );

    // Check if the links for each person are correct
    mockPeople.forEach(person => {
        expect(screen.getByRole('link', { name: person.name })).toBeInTheDocument();
    });
  });

  test('renders the create person icon link', () => {
    render(
      <Router>
        <Sidebar people={mockPeople} />
      </Router>
    );

    // Check if the create person icon link is rendered
    const createPersonLink = screen.getByRole('link', { name: /create-person/i });
    expect(createPersonLink).toHaveAttribute('href', '/person/create');
  });
});