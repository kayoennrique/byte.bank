import { render, screen } from '@testing-library/react';
import Extract from './index';

it('Should render a list of transactions', () => {
    const transactions = [
        {
            transaction: 'Depósito',
            amount: 100,
        },
    ];

    render(<Extract transactions={transactions}/>);
    const list = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
});