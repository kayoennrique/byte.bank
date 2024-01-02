import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './pages/Main/App';
import AppRoutes from './routes';
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

    const myCards = screen.getByText('Meus cartões');
    expect(myCards).toHaveTextContent('Meus cartões');
  });

  it('Should render current route location', () => {
    const route = '/cards';
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const currentLocation = screen.getByTestId('local');
    expect(currentLocation).toHaveTextContent(route);
  });

  it('Should render 404 page', () => {
    const route = '/extract';

    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>
    );

    const pageErro = screen.getByTestId('page-404');
    expect(pageErro).toContainHTML('<h1>Ops! Não encontramos a página</h1>');
  });
});
