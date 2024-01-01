import {calculateNewBalance} from './index';

describe('When I perform a transaction', () => {
    test('Which is a deposit, the balance must increase', () => {
        const transaction = {
            transaction: 'Depósito',
            amount: 50
        }

        const newBalance = calculateNewBalance(transaction, 100)

        expect(newBalance).toBe(150)
    });
    test('Which is a transfer, the balance must decrease', () => {
        const transaction = {
            transaction: 'Transferência',
            amount: 50
        }

        const newBalance = calculateNewBalance(transaction, 100)

        expect(newBalance).toBe(50)
    });
});
test('It must return the balance value updated with the income', () => {
    const calculateIncome = jest.fn((balance) => balance + balance * 0.005);

    const balance = 100;

    const newBalance = calculateIncome(balance);
    expect(newBalance).toBe(100.5);
    expect(calculateIncome).toHaveBeenCalledWith(balance);
});