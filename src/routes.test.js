import { render, screen } from '@testing-library/react';
import App from './pages/Main/App';
import { BrowserRouter } from 'react-router-dom';

describe('Routes', () => {
    it('Should render the main route', () => {
        render(<App />, {wrapper: BrowserRouter});
        const user = screen.getByText('Olá, Kayo :)!');
        expect(user).toBeInTheDocument();
    });
  });