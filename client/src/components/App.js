import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import Wallet from "../pages/Wallet"
import Cryptos from "../pages/Cryptos"

function App() {
  // const [walletKey, setWalletKey] = useState(null)
  const [walletKey, setWalletKey] = useState('')


  useEffect(() => {
    // auto-login
    fetch('/wallet').then(r => {
      if (r.ok) {
        r.json().then(wallet => setWalletKey(wallet.wallet_key))
      }
    })
  }, [])

  if (!walletKey) return <Login onLogin={setWalletKey} />

  console.log('WalletKey from App.js: ')
  console.log(walletKey)
  console.log(walletKey.password_digest) // looks unfamiliar
  // wallet_key is null (?)

  return (
    <main className='wrapper'>
      <Router>
        <NavBar walletKey={walletKey} setWalletKey={setWalletKey} />
        <Routes>
          <Route path='/' element={<Wallet />} walletKey={walletKey} />
          <Route path='/cryptos' element={<Cryptos />} />
          <Route path='*' element={<Wallet />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App