import { Link } from "react-router-dom"
import "../App.css"

function NavBar({ setWalletKey, onDarkModeClick, isDarkMode }) {
  
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then(r => {
      if (r.ok) {
        setWalletKey(null)
      }
    })
  }

  return(
    <>
      <nav className="navbar">
        <Link to='/' className='logo'>Green 🌱 Beans</Link>
        <Link to='/cryptos' className='nav-link'>Cryptos</Link>
        <button onClick={onDarkModeClick} className="small-button">{isDarkMode? "Dark" : "Light"} Mode</button>
        <button onClick={handleLogoutClick} className='ghost-button'>
          Logout
        </button>
      </nav>
    </>
  )
}

export default NavBar