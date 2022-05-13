import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="rockets" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
