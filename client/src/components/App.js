import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import Wallet from "../pages/Wallet"
import Cryptos from "../pages/Cryptos"

function App() {
  const [walletKey, setWalletKey] = useState(null)
  const [cryptos, setCryptos] = useState([])
  const [wallet, setWallet] = useState(null)

  useEffect(() => {
    // auto-login
    fetch('/wallet').then(r => { 
      if (r.ok) {
        r.json()
        .then(wallet => setWalletKey(wallet.wallet_key))        
      }
    })
  }, [])

  useEffect(() =>{
    fetch('/wallet')
    .then(r => r.json())
    .then(wallet => setCryptos(wallet.cryptos))
  }, [])


  useEffect(() =>{
    fetch('/wallet')
    .then(r => r.json())
    .then(wallet => setWallet(wallet))
  }, [])

  console.log(wallet)

  if (!walletKey) return <Login onLogin={setWalletKey} />

  function handleAddCrypto(crypto) {
    console.log(crypto)
  }


    // fetch('/walletcryptos', { 
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       'wallet_id': wallet.id,
  //       'crypto_id': crypto.id,
  //     }),
  // })
  // .then(r => r.json())
  // .then(r => console.log(r))

// ion NavBar({setWalletKey}) {
  //   function handleLogoutClick() {
  //     fetch('/logout', { method: 'DELETE' }).then(r => {
  //       if (r.ok) {
  //         setWalletKey(null)
  //       }
  //     })
    // }

  function handleRemoveCrypto() {
    console.log(`remove crypto!`)
    // fetch('/xxx')
  }

  return (
    <main className='wrapper'>
      <Router>
        <NavBar walletKey={walletKey} setWalletKey={setWalletKey} />
        <Routes>
          <Route path='/' element={<Wallet walletKey={walletKey} cryptos={cryptos} />} />
          <Route path='/cryptos' element={<Cryptos onAddCrypto={handleAddCrypto} onRemoveCrypto={handleRemoveCrypto} />} />
          <Route path='*' element={<Wallet walletKey={walletKey} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App