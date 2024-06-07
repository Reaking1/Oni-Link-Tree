import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from '../Menu/menu';


test('renders menu component', () => {
  const { getByText } = render(<Menu/>);
  const menuElement = getByText(/menu item/i);
  expect(menuElement).toBeInTheDocument();
});