import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  /// AAA -> arrang act assert

  // arrange
  render(<App />);

  //act
  const linkElement = screen.getByText(/learn react/i);

  // assert
  expect(linkElement).toBeInTheDocument();
});
