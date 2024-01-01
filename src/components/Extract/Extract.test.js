import { render, screen } from '@testing-library/react';
import Extract from './index';

test('Should render a list of transactions', () => {
    const transactions = [
        {
            transaction: 'Depósito',
            value: 100,
        },
    ];

    render(<Extract transactions={transactions}/>);
    const list = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
});