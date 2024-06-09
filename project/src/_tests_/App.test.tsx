import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { ToastContainer } from 'react-toastify';


test('renders profile image and text', () => {
  render(<App/>);
  const profileImage = screen.getByAltText(/Profile/i);
  expect(profileImage).toBeInTheDocument();
});

test('renders AnimatedText component', () => {
  render(<App />);
  const animatedText = screen.getByText(/Developer\/Streamer/i);
  expect(animatedText).toBeInTheDocument();
});

test('rectangular bars show toast notification on click', () => {
  render(
    <>
      <App />
      <ToastContainer />
    </>
  );
  const rectangularBars = screen.getAllByRole('heading', { level: 3 });
  rectangularBars.forEach((bar) => {
    fireEvent.click(bar);
    expect(screen.getByText(/The website is still under construction/i)).toBeInTheDocument();
  });
});

test('renders social media icons with correct links', () => {
  render(<App />);
  const twitchLink = screen.getByRole('link', { name: /twitch/i });
  expect(twitchLink).toHaveAttribute('href', 'https://www.twitch.tv/theghostking2003');

  const instagramLink = screen.getByRole('link', { name: /instagram/i });
  expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/theghostking2003/');

  const youtubeLink = screen.getByRole('link', { name: /youtube/i });
  expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/channel/UCKr7PWRY5DoeWqHQGb29iPA');

  const tiktokLink = screen.getByRole('link', { name: /tiktok/i });
  expect(tiktokLink).toHaveAttribute('href', 'https://www.tiktok.com/@theghostking2003?is_from_webapp=1&sender_device=pc');
});

test('renders background icons', () => {
  render(<App />);
  const gamepadIcon = screen.getByTestId('gamepad-icon');
  expect(gamepadIcon).toBeInTheDocument();
  const codeIcon = screen.getByTestId('code-icon');
  expect(codeIcon).toBeInTheDocument();
  const keyboardIcon = screen.getByTestId('keyboard-icon');
  expect(keyboardIcon).toBeInTheDocument();
  const laptopCodeIcon = screen.getByTestId('laptop-code-icon');
  expect(laptopCodeIcon).toBeInTheDocument();
  const mobileAltIcon = screen.getByTestId('mobile-alt-icon');
  expect(mobileAltIcon).toBeInTheDocument();
});
