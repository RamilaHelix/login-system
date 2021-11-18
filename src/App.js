import Nav from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Login from './pages/Login';
import Profile from './pages/Profile';
function App() {
  return (
    <Router>
   
      <Nav />
    
    <Routes>
      <Route path="/" element={<Login/>}>       
      </Route>
      <Route path="/profile" element={<Profile />}>     
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
