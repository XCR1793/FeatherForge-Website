import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Products from './pages/products';
import Commissions from './pages/commissions';
import Contacts from './pages/contacts';
import TOS from './pages/tos';
import Error404 from './pages/error404';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/commissions" element={<Commissions />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/tos" element={<TOS />} />
                <Route path="*" element={<Error404 />} /> {}
            </Routes>
        </Router>
    );
}

export default App;
