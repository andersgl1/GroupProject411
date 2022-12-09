import logo from './logo.svg';
import './App.css';
import ButtonTesting from './components/ButtonTesting';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AboutUser from './Pages/AboutUser';
import Menu from './Pages/Menu';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';

import { 
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AboutUser />} />
          <Route exact path="menu" element={<Menu />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="settings" element={<Settings />} />
          <Route exact path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
