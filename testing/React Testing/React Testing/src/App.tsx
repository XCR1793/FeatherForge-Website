import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Commissions from './pages/commissions';
import Contacts from './pages/contacts';
import TOS from './pages/tos';
import Error404 from './pages/error404';
import NSFW from './pages/nsfw';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/commissions" element={<Commissions />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/tos" element={<TOS />} />
                <Route path="/nsfw" element={<NSFW />} />
                <Route path="*" element={<Error404 />} /> {}
            </Routes>
        </Router>
    );
}

export default App;
