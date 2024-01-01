import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';

describe('Must render an input field', () => {
    test('in document', () => {
        render(<Form/>);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toBeInTheDocument();
    });
    
    test(' with type, and number', () => {
        render(<Form/>);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toHaveAttribute('type', 'number');
    });
    
    test(' that can be populated', () => {
        render(<Form/>);
        const textField = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(textField, '50');
        expect(textField).toHaveValue(50);
    });
});