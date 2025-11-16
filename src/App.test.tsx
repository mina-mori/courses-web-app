// eslint-disable no-undef
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock axios to prevent ES module issues
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));
test('renders navbar with correct links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Check if navbar links are present
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Courses')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getByText('About Us')).toBeInTheDocument();
});
