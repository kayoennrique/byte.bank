test('It must return the balance value updated with the income', () => {
    const calculateIncome = jest.fn((balance) => balance + balance * 0.005);

    const balance = 100;

    const newBalance = calculateIncome(balance);
    expect(newBalance).toBe(100.5);
    expect(calculateIncome).toHaveBeenCalledWith(balance);
});