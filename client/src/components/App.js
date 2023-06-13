import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import Wallet from "../pages/Wallet"
import Cryptos from "../pages/Cryptos"

function App() {
  const [walletKey, setWalletKey] = useState(null)
  const [wallet, setWallet] = useState(null)
  const [cryptos, setCryptos] = useState(null)

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, [])

  useEffect(() => {
    // auto-login
    fetch('/wallet').then(r => {
      if (r.ok) {
        r.json().then(wallet => setWalletKey(wallet.wallet_key))
      }
    })
  }, []) // walletKey

  useEffect(() => {
    fetch('/wallet')
      .then(r => r.json())
      .then(wallet => setWallet(wallet))
  }, [])

  function handleLogin(wallet) {
    setWalletKey(wallet.wallet_key)
    // console.log(wallet)
  }
// console.log(walletKey)

  function handleAddCrypto(crypto) {
    setCryptos([...cryptos, crypto])
  }

  if (!walletKey) return <Login onLogin={handleLogin} />

  return (
    <main className='wrapper'>
      <Router>
        <NavBar walletKey={walletKey} setWalletKey={setWalletKey} />
        <Routes>
          <Route
            path='/'
            element={<Wallet
              walletKey={walletKey}
              wallet={wallet}
              cryptos={cryptos}
            />}
          />
          <Route 
            path='/cryptos' 
            element={<Cryptos
              wallet={wallet}
              cryptos={cryptos}
              onAddCrypto={handleAddCrypto}
            />} 
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App