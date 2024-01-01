import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Should render a link to the home page', () => {
  render(<Menu />);
  const linkHomePage = screen.getByText('Inicial');
  expect(linkHomePage).toBeInTheDocument();
});

test('Should render a list of links', () => {
  render(<Menu />);
  const linksList = screen.getAllByRole('link');
  expect(linksList).toHaveLength(4);
});

test('Should not render the link to Extract', () => {
  render(<Menu />);
  const linkExtract = screen.queryByText('Extrato');
  expect(linkExtract).not.toBeInTheDocument();
});

