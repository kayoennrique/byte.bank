import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './index';

it('Should render a link to the home page', () => {
  render(<Menu />, { wrapper: BrowserRouter });
  const linkHomePage = screen.getByText('Início');
  expect(linkHomePage).toBeInTheDocument();
});

it('Should render a list of links', () => {
  render(<Menu />, { wrapper: BrowserRouter });
  const linksList = screen.getAllByRole('link');
  expect(linksList).toHaveLength(4);
});

it('Should not render the link to Extract', () => {
  render(<Menu />, { wrapper: BrowserRouter });
  const linkExtract = screen.queryByText('Extrato');
  expect(linkExtract).not.toBeInTheDocument();
});

it('It should render a list of links and with the link class', () => {
  render(<Menu />, { wrapper: BrowserRouter });
  const links = screen.getAllByRole('link');
  links.forEach((link) => {
    expect(link).toHaveClass('link');
  });
  expect(links).toMatchSnapshot();
});
