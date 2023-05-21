import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import Wallet from "../pages/Wallet"
import Cryptos from "../pages/Cryptos"

function App() {
  const [walletKey, setWalletKey] = useState(null)

  useEffect(() => {
    // auto-login
    fetch('/wallet').then(r => {
      if (r.ok) {
        r.json().then((walletKey) => setWalletKey(walletKey))
      }
    })
  }, [])

  if (!walletKey) return <Login onLogin={setWalletKey} />

  return (
    <main className='wrapper'>
      <Router>
        <NavBar walletKey={walletKey} setWalletKey={setWalletKey} />
        <Routes>
          <Route path='/' element={<Wallet />} walletKey={walletKey} />
          <Route path='/cryptos' element={<Cryptos />} />
          {/* Redirect - but is this redundant bc of the backend controller save? */}
          <Route path='*' element={<Wallet />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App