import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home" // remove Home component 
import Wallet from "./Wallet"
import Cryptos from "./Cryptos"
import Login from "./Login"
import '../App.css';

function Navbar({ onLogout, wallet }) {

  console.log(wallet)
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout())
  }

  return(
    <div className="header">
      <h1 className='logo'>Green 🌱 Beans</h1>
      <Router>
        <nav className="navbar">
          {/* make Wallets singular */}
          <Link to='/wallet' className='nav-link'>Wallet</Link> 
          <Link to='/cryptos' className='nav-link'>Cryptos</Link>
          <Link to='/login' className='nav-link'>Login</Link>
        </nav>

        <Routes>
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/cryptos' element={<Cryptos />} />
          <Route path='/login' element={<Login />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
