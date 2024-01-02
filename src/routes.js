import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import Investiments from './components/Investiments';
import Services from './components/Services';
import Page404 from './pages/Page404';
import App from './pages/Main/App';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cards" element={<Cards />} />
        <Route path="investiments" element={<Investiments />} />
        <Route path="services" element={<Services />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
