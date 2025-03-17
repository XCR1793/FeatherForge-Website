import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/PageHome';
import Commissions from './pages/Commissions';
import Contacts from './pages/PageContacts';
import LinkTree from './pages/PageLinkTree';
import TOS from './pages/PageTos';
import Error404 from './pages/PageError404';
import NSFW from './pages/PageNsfw';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/commissions" element={<Commissions />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/linktree" element={<LinkTree />} />
                <Route path="/tos" element={<TOS />} />
                <Route path="/nsfw" element={<NSFW />} />
                <Route path="*" element={<Error404 />} /> {}
            </Routes>
        </Router>
    );
}

export default App;
