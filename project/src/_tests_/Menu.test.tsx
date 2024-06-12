// src/_tests_/Menu.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import Menu from '../Menu/menu';


describe("Menu Component", () => {
  test('renders menu button and social media links', () => {
    render(<Menu />);

    //Find the menu button and click it open the menu
    const menuButton = screen.getByRole('button', {name: /fa-bars/i});
    fireEvent.click(menuButton)

    //Verify the social media links
    const snapchatLink = screen.getByRole('link', {name: /snapchat/i});
    const linkendinLink = screen.getByRole('link', {name: /linkendin/i});
    const facebookLink = screen.getByRole('link', {name: /faceboo/i});
    const instagramLink = screen.getByRole('link', {name: /instagram/i});

    expect(snapchatLink).toBeInTheDocument();
    expect(linkendinLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
  })
})
