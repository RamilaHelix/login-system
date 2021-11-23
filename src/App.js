import Nav from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  // const { logout } = useAuth0();


  return (
   
   <Router>
     
      {/* <button onClick={() => logout({ returnTo: window.location.origin })}> Log Out</button> */}
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
