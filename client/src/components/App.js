import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import Wallet from "../pages/Wallet"
import Cryptos from "../pages/Cryptos"

function App() {
  const [walletKey, setWalletKey] = useState(null)
  const [wallet, setWallet] = useState(null)
  const [walletcryptos, setWalletcryptos] = useState([])

  useEffect(() => {
    // auto-login
    fetch('/wallet').then(r => {
      if (r.ok) {
        r.json().then(wallet => setWalletKey(wallet.wallet_key))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/wallet')
      .then(r => r.json())
      .then(wallet => setWallet(wallet))
  }, [])
  
  useEffect(() => {
    fetch('/wallet')
      .then(r => r.json())
      .then(wallet => setWalletcryptos(wallet.walletcryptos))
  }, [])

  if (!walletKey) return <Login onLogin={setWalletKey} />

  function handleAddWalletcrypto(walletcrypto) {
    setWalletcryptos([walletcrypto, ...walletcryptos]) // .sort() alphabetically by name
  }

  function handleDeleteWalletcrypto(deleted) {
    const filtered = walletcryptos.filter(walletcrypto => {
      return walletcrypto.id !== deleted.id   
    })
    setWalletcryptos(filtered)
  }

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
              walletcryptos={walletcryptos}
              onDeleteWalletcrypto={handleDeleteWalletcrypto}
            />}
          />
          <Route 
            path='/cryptos' 
            element={<Cryptos
              wallet={wallet}
              onAddWalletcrypto={handleAddWalletcrypto}
            />} 
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App


  // // FIX IN BACKEND!!!!!!!!!!!!
  // function handleIncrementCrypto(crypto, cryptoQuantity) {
  //   console.log(crypto)
  //   // fetch('/cryptos', {
  //   //   method: 'PATCH',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   //   body: JSON.stringify({
  //   //     'crypto_id': crypto.id,
  //   //     'quantity': cryptoQuantity,
  //   //   }),
  //   // })
  //   //   .then(r => r.json())
  //   //   .then(crypto => console.log(crypto))
  // }

  // onIncrementCrypto={handleIncrementCrypto}

            // {/* <Route path='*' element={<Wallet walletKey={walletKey} />} /> */}

            // function handleRemoveCrypto() {
            //   console.log(`remove crypto!`)
            //   // fetch('/wallet-crypto')
            //   // method: 'DELETE'
            // }
          
            // onRemoveCrypto={handleRemoveCrypto}