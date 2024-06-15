//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '../src/Menu/menu';

describe('Menu Component', () => {
  test('renders menu button and social media links', () => {
    render(<Menu />);

    // Find the menu button and click it to open the menu
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    // Verify the social media links
    const snapchatLink = screen.getByText(/snapchat/i).closest('a');
    const linkedinLink = screen.getByText(/linkedin/i).closest('a');
    const facebookLink = screen.getByText(/facebook/i).closest('a');
    const instagramLink = screen.getByText(/instagram/i).closest('a');

    expect(snapchatLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
  });
});
