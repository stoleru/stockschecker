import { render, screen } from '@testing-library/react';
import StockAddForm from './StockAddForm';

test('renders learn react link', () => {
  render(<StockAddForm />);
  const linkElement = screen.getByText(/Add Stock/i);
  expect(linkElement).toBeInTheDocument();
});
