import { Link } from "react-router-dom"
import "../App.css"

function NavBar({setWalletKey}) {
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then(r => {
      if (r.ok) {
        setWalletKey(null)
      }
    })
  }

  return(
    <nav className="navbar">
      <Link to='/' className='logo'>Green 🌱 Beans</Link>
      <Link to='/cryptos' className='nav-link'>Cryptos</Link>
      <button onClick={handleLogoutClick}>
        Logout
      </button>
    </nav>
  )
}

export default NavBar