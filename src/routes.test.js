import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './pages/Main/App';
import Cards from './components/Cards';

describe('Routes', () => {
    it('Should render the main route', () => {
      render(<App />, { wrapper: BrowserRouter });
      const user = screen.getByText('Olá, Kayo :)!');
      expect(user).toBeInTheDocument();
    });
  
    it('Should render the Cards route', () => {
      const route = '/cards';
      render(
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="cards" element={<Cards />} />
            </Route>
          </Routes>
        </MemoryRouter>
      );
  
      const meusCartoes = screen.getByText('Meus cartões');
      expect(meusCartoes).toHaveTextContent('Meus cartões');
    });
});