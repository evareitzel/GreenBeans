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



function Navbar() { // { onLogout }
  // The onLogout callback function would handle removing the information about the wallet from state.
  // Move to App.js ?
  // function handleLogout() {
  //   fetch('/logout', {
  //     method: 'DELETE',
  //   }).then(() => onLogout());
  // }

  return(
    <div>
      <Router >
      <nav className="navbar">
        <Link to='/' className='logo'>Green Beans 🌱</Link>
        <br />
        <Link to='/wallet' className='nav-link'>Wallet</Link>
        <Link to='/cryptos' className='nav-link'>Cryptos</Link>
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
    </div>
  );
}

export default Navbar;

      // {/* <button onClick={handleLogout}>Logout</button> */}

      // <nav>
      //     <h1>Green Beans 🌱</h1> {/* 🌿 */}
      //     <ul>
      //       <li>
      //         <Link to='/'>Home</Link>
      //       </li>
      //       <li>
      //         <Link to='/wallet'>Wallet</Link>
      //       </li>
      //       <li>
      //         <Link to='/cryptos'>Cryptos</Link>
      //       </li>
      //     </ul>
      //   </nav>

    // # 2
    //   <nav>
    //   <h1>
    //     <Link to='/'>Green Beans 🌱</Link>
    //   </h1>
    //   <Switch>
    //     <Route exact path='/'><Home /></Route>
    //     <Link to='/wallet'>Wallet</Link>
    //     <Link to='/cryptos'>Cryptos</Link>
    //   </Switch>
    // </nav>
