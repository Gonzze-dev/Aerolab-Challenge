import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import History from './pages/History';
import Nav from './components/Nav';

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;