import { Route, Routes } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import DirectoryPage from './pages/DirectoryPage';
import CategoryPage from './pages/CategoryPage';
import PlacePage from './pages/PlacePage';
import PlansPage from './pages/PlansPage';
import RoutesPage from './pages/RoutesPage';
import SuggestPage from './pages/SuggestPage';
import PromotePage from './pages/PromotePage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directorio" element={<DirectoryPage />} />
        <Route path="/categoria/:slug" element={<CategoryPage />} />
        <Route path="/lugar/:id" element={<PlacePage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="/rutas" element={<RoutesPage />} />
        <Route path="/sugerir" element={<SuggestPage />} />
        <Route path="/destacar" element={<PromotePage />} />
        <Route path="/legal/:page" element={<LegalPage />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;
