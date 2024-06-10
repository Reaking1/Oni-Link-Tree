// src/_tests_/Menu.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from '../Menu/menu';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders menu component with links', () => {
  render(
    <Router>
      <Menu />
    </Router>
  );

  // Check if specific links are in the document
  const homeLink = screen.getByRole('link', { name: /home/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  const contactLink = screen.getByRole('link', { name: /contact/i });

  // Ensure the links are in the document
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();

  // Optionally, check the href values of the links
  expect(homeLink).toHaveAttribute('href', '/home');
  expect(aboutLink).toHaveAttribute('href', '/about');
  expect(contactLink).toHaveAttribute('href', '/contact');
});
