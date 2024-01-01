import { render, screen } from '@testing-library/react';
import Transactions from './index';
import styles from '../Extract.module.css';

test('Must render the same component with updated props', () => {
    const transaction = {
      transaction: 'Depósito',
      amount: 100,
    };
    const { rerender } = render(
      <Transactions styles={styles} transaction={transaction} />
    );
    const typeTransaction = screen.getByTestId('typeTransaction');
    const valueTransaction = screen.getByTestId('valueTransaction');
  
    expect(typeTransaction).toHaveTextContent('Depósito');
    expect(valueTransaction).toHaveTextContent('R$ 100');
  
    const newTransaction = {
      transaction: 'Transferência',
      amount: 50,
    };
  
    rerender(<Transactions styles={styles} transaction={newTransaction} />);
    const newTypeTransaction = screen.getByTestId('typeTransaction');
    const newValueTransaction = screen.getByTestId('valueTransaction');
  
    expect(newTypeTransaction).toHaveTextContent('Transferência');
    expect(newValueTransaction).toHaveTextContent('- R$ 50');
  });