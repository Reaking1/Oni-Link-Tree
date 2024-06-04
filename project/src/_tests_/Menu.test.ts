import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '../Menu/menu';
import '@testing-library/jest-dom/extend-expect'; // Ensure this is included

test('menu button toggles dropdown menu', () => {
  render(<Menu />);
  const menuButton = screen.getByRole('button', { name: /bars/i });
  fireEvent.click(menuButton);
  const dropdownMenu = screen.getByText(/Share Link via the following sources/i);
  expect(dropdownMenu).toBeInTheDocument();
});
