import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import Investiments from './components/Investiments';
import Services from './components/Services';
import Page404 from './pages/Page404';
import Start from './pages/Start';
import Home from 'pages/Home';
import PageDefault from 'pages/PageDefault';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageDefault />}>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />}>
          <Route path="cards" element={<Cards />} />
          <Route path="investiments" element={<Investiments />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
