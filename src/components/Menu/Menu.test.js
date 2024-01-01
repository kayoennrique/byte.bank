import { render, screen } from '@testing-library/react';
import Menu from './index';

it('Should render a link to the home page', () => {
  render(<Menu />);
  const linkHomePage = screen.getByText('Inicial');
  expect(linkHomePage).toBeInTheDocument();
});

it('Should render a list of links', () => {
  render(<Menu />);
  const linksList = screen.getAllByRole('link');
  expect(linksList).toHaveLength(4);
});

it('Should not render the link to Extract', () => {
  render(<Menu />);
  const linkExtract = screen.queryByText('Extrato');
  expect(linkExtract).not.toBeInTheDocument();
});

it('It should render a list of links and with the link class', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
});