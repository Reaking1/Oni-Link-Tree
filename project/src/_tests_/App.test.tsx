//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { toast } from 'react-toastify';

// Mock toast notifications
jest.mock('react-toastify', () => ({
  ...jest.requireActual('react-toastify'),
  toast: {
    info: jest.fn(),
  },
}));

describe('App Component', () => {
  test('renders menu and triggers toast notifications', () => {
    render(<App />);

    // Find and click the rectangular bars to trigger toast notifications
    const bars = screen.getAllByRole('button', { name: /oni website|portfolio|blog|anime top tier least of the week/i });
    bars.forEach(bar => fireEvent.click(bar));

    // Verify that the toast notifications were called
    expect(toast.info).toHaveBeenCalledTimes(4);
    expect(toast.info).toHaveBeenCalledWith('The website is still under construction');
  });
});
