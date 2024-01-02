import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppRoutes from '../../routes';

describe('Component <App/>', () => {
  test('It should allow adding a transaction to Statement', () => {
    render(<App />, { wrapper: BrowserRouter });

    const select = screen.getByRole('combobox');
    const fieldValue = screen.getByPlaceholderText('Digite um valor');
    const button = screen.getByRole('button');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(fieldValue, '100');
    userEvent.click(button);

    const newTransaction = screen.getByTestId('transaction-list');
    const itemExtract = screen.getByRole('listitem');

    expect(newTransaction).toContainElement(itemExtract);
  });

  test('You must navigate to the page corresponding to the clicked link', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPageCards = screen.getByText('Cartões');
    expect(linkPageCards).toBeInTheDocument();

    userEvent.click(linkPageCards);

    const titlePageCards = await screen.findByText('Meus cartões');
    expect(titlePageCards).toBeInTheDocument();
  });
});