import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import Wallet from "../pages/Wallet"
import Cryptos from "../pages/Cryptos"

function App() {
  const [walletKey, setWalletKey] = useState(null)
  const [walletCryptos, setWalletCryptos] = useState([])
  const [wallet, setWallet] = useState(null)

  const [cryptos, setCryptos] = useState([])

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
      // .then(wallet => setWalletCryptos(wallet.walletcryptos))
    }, [])

    useEffect(() => {
      fetch('/wallet')
        .then(r => r.json())
        .then(wallet => setCryptos(wallet.cryptos))
        // .then(wallet => setWalletCryptos(wallet.walletcryptos)) // wallet.cryptos
    }, [])
  
  useEffect(() => {
    fetch('/wallet')
      .then(r => r.json())
      .then(wallet => setWalletCryptos(wallet.walletcryptos)) // wallet.cryptos
  }, [])

  if (!walletKey) return <Login onLogin={setWalletKey} />

  function handleAddCrypto(crypto, quantity) {
    fetch('/walletcryptos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'wallet_id': wallet.id,
        'crypto_id': crypto.id,
        quantity
      }),
    })
      .then(r => r.json())
      .then(crypto => setWalletCryptos([crypto, ...walletCryptos]) // .sort() alphabetically by name
      )
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
              cryptos={cryptos}
            />}
          />
          <Route path='/cryptos' element={<Cryptos onAddCrypto={handleAddCrypto} walletCryptos={walletCryptos} />} />
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