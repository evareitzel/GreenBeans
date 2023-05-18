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
    <div>
      <Router>
        <nav className="navbar">
          {/* make Wallets singular */}
          <Link to='/' className='logo'>Green 🌱 Beans </Link>

          <Link to='/wallet' className='nav-link'>Wallet</Link> 
          <Link to='/cryptos' className='nav-link'>Cryptos</Link>
          {/* login/logout here? */}
          <Link to='/login' className='nav-link'>Login</Link>
          {/* <button onClick={handleLogout}>Logout (not a toggle)</button>

          <button>{wallet == null ? "Login (toggle - build functionality)" : "Logout (toggle - build functionality)"}</button> */}

        </nav>

        <Routes>
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/cryptos' element={<Cryptos />} />
          {/* make Login/Logout toggle */}
          <Route path='/login' element={<Login />} /> 
          {/* <Route path='*' element={<Error />} />  */}
        </Routes>
      </Router>

      {/* Why is Logout btn at bottom? */}
      {/* <button onClick={handleLogout}>Logout (not a toggle)</button> */}

      {/* <button>{wallet == null ? "Login (toggle - build functionality)" : "Logout (toggle - build functionality)"}</button> */}

      {/* toggle - make functional */}

    </div>
  );
}

export default Navbar;

// onClick={onLoginLogoutClick} 


// return(
//   <div>
//     <h1 className='logo'>Green 🌱 Beans</h1>
//     <Router>
//       <nav className="navbar">
//         {/* make Wallets singular */}
//         <Link to='/wallet' className='nav-link'>Wallet</Link> 
//         <Link to='/cryptos' className='nav-link'>Cryptos</Link>
//         {/* login/logout here? */}
//         <Link to='/login' className='nav-link'>Login</Link>
//       </nav>

//       <Routes>
//         <Route path='/' element={<Home />} /> {/* remove */}
//         <Route path='/wallet' element={<Wallet />} /> {/* Make wallet home ( '/' ) */}
//         <Route path='/cryptos' element={<Cryptos />} />
//         {/* make Login/Logout toggle */}
//         <Route path='/login' element={<Login />} /> 
//         {/* <Route path='*' element={<Error />} />  */}
//       </Routes>
//     </Router>

//     {/* Why is Logout btn at bottom? */}
//     <button onClick={handleLogout}>Logout</button>

//   </div>
// );