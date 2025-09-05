import { BrowserRouter, Routes, Route } from 'react-router-dom';
//layout
import Header from './layouts/Header';
import Footer from './layouts/Footer';

//pages
import Browse from './pages/Browse';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ProductCreate from './pages/ProductCreate';
import Search from './pages/Search';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Browse" element={<Browse />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ProductCreate" element={<ProductCreate />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;