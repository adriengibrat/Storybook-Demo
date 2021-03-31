import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Laura Delporte/i);
  expect(linkElement).toBeInTheDocument();
});
