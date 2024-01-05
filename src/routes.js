import { Route, Routes } from 'react-router-dom';

import PageDefault from 'pages/PageDefault';
import Home from 'pages/Home';
import Cards from './pages/Home/Cards';
import Investiments from './pages/Home/Investiments';
import Services from './pages/Home/Services';
import Start from 'pages/Start';
import Page404 from 'pages/Page404';
import { HomeProvider } from 'common/context/HomeContext';
import { HeadProvider } from 'common/context/HeaderContext';
import { ModalProvider } from 'common/context/ModalContext';
import { MyAccount } from 'pages/MyAccount';

export default function AppRoutes() {
  return (
    <HomeProvider>
      <HeadProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<PageDefault />}>
              <Route path="/" element={<Start />} />
              <Route path="/home" element={<Home />}>
                <Route path="cards" element={<Cards />} />
                <Route path="investiments" element={<Investiments />} />
                <Route path="services" element={<Services />} />
              </Route>
              <Route path="/my-account" element={<MyAccount />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </ModalProvider>
      </HeadProvider>
    </HomeProvider>
  );
}
