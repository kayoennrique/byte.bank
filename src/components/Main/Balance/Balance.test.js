import { render, screen } from '@testing-library/react';
import Balance from './index';

describe('Component <Balance />', () => {
  test('Must render balance with monetary value', () => {
    render(<Balance balance={1000} />);

    const balance = screen.getByTestId('balance');
    expect(balance).toHaveTextContent('R$ 1000');
  });
});