import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Coverage from '../pages/Coverage';
import Claims from '../pages/Claims';
import Contact from '../pages/Contact';
import Chat from '../components/Chat';

const AppRoutes = () => (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Chat />
    </>
);

export default AppRoutes;