import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import Wallet from "../pages/Wallet"
import Cryptos from "../pages/Cryptos"

function App() {
  const [walletKey, setWalletKey] = useState(null)
  const [wallet, setWallet] = useState(null)
  // const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    // auto-login
    fetch('/wallet').then(r => { 
      if (r.ok) {
        r.json()
        .then(wallet => setWalletKey(wallet.wallet_key))
        // .then(wallet => setWallet(wallet))
      }
    })
  }, [])

  useEffect(() =>{
    fetch('/wallet')
    .then(r => r.json())
    .then(wallet => setWallet(wallet))
  }, [])

  if (!walletKey) return <Login onLogin={setWalletKey} />

  // console.log('WalletKey from App.js: ')
  // console.log(walletKey)
  // console.log('Wallet from App.js: ')
  // console.log(wallet)

  // console.log(wallet.cryptos)

  function handleAddCrypto(e) { // e?
    console.log(`handleAddCrypto func from App.js: ${e.target.value}`)
    // fetch('/walletcryptos', { 
  //   fetch('/add-crypto', { 
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       // 'wallet_id': 'wallet.id',
  //       // wallet.id,
  //       // 'crypto.id': 'crypto.id',
  //       // crypto.id,
  //     }),
  // }).then(r => console.log(r))
  }

  // ion NavBar({setWalletKey}) {
  //   function handleLogoutClick() {
  //     fetch('/logout', { method: 'DELETE' }).then(r => {
  //       if (r.ok) {
  //         setWalletKey(null)
  //       }
  //     })
  //   }

  return (
    <main className='wrapper'>
      <Router>
        <NavBar walletKey={walletKey} setWalletKey={setWalletKey} />
        <Routes>
          <Route path='/' element={<Wallet walletKey={walletKey} wallet={wallet} />} />
          <Route path='/cryptos' element={<Cryptos onAddCrypto={handleAddCrypto} />} />
          <Route path='*' element={<Wallet walletKey={walletKey} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App