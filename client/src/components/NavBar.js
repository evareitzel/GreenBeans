// import React from "react"
import { Link } from "react-router-dom"

function NavBar({setWallet}) { // wallet, 
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then(r => {
      if (r.ok) {
        setWallet(null)
      }
    })
  }

  return(
    <>
      <Link to='/'>
        <h1 className='logo'>Green 🌱 Beans</h1>
      </Link>
      <nav className="navbar">
          <Link to='/wallet' className='nav-link'>Wallet</Link> 
          <Link to='/cryptos' className='nav-link'>Cryptos</Link>
          <button onClick={handleLogoutClick}>
            Logout
          </button>
        </nav>
    </>
  )
}

export default NavBar