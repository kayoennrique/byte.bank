import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';

describe('Must render an input field', () => {
    it('in document', () => {
        render(<Form/>);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toBeInTheDocument();
    });
    
    it(' with type, and number', () => {
        render(<Form/>);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toHaveAttribute('type', 'number');
    });
    
    it(' that can be populated', () => {
        render(<Form/>);
        const textField = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(textField, '50');
        expect(textField).toHaveValue(50);
    });
});

it('You must call an onSubmit event when you click on perform transaction', () => {
    const carryOutTransaction = jest.fn();

    render(<Form carryOutTransaction={carryOutTransaction}/>);
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(carryOutTransaction).toHaveBeenCalledTimes(1);
  });  