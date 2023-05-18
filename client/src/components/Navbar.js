import {
  Link, 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home"
import Wallet from "./Wallet"
import Cryptos from "./Cryptos"
import Login from "./Login"
import '../App.css';



function Navbar({ onLogout }) {

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout())
  }

  return(
    <div>
      <Router >
        <nav className="navbar">
          <Link to='/wallet' className='nav-link'>Wallet</Link>
          <Link to='/cryptos' className='nav-link'>Cryptos</Link>
          {/* login/logout here? */}
          <Link to='/login' className='nav-link'>Login</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/cryptos' element={<Cryptos />} />
          <Route path='/login' element={<Login />} /> 
          {/* <Route path='*' element={<Error />} />  */}
        </Routes>
        {/* <footer>&copy; 2023</footer> */}
      </Router>

      {/* Why is Logout btn at bottom? */}
      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Navbar;
