import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Component <App/>', () => {
    it('It should allow adding a transaction to Statement', () => {
      render(<App />, { wrapper: BrowserRouter });

      const select = screen.getByRole('combobox');  
      const fieldValue = screen.getAllByPlaceholderText('Digite um valor');
      const button = screen.getByRole('button');

      userEvent.selectOptions(select, ['Depósito']);
      userEvent.type(fieldValue, '100');
      userEvent.click(button);

      const newTransaction = screen.getByTestId('transaction-list');
      const itemExtract = screen.getByRole('listitem');

      expect(newTransaction).toContainElement(itemExtract);
       
  });
});