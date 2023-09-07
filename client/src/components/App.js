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
  const [walletcryptos, setWalletcryptos] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

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

    useEffect(() =>{
      fetch('/cryptos')
      .then(r => r.json())
      .then(cryptos => setCryptos(cryptos))
    }, [wallet, walletcryptos])

    useEffect(() => {
      fetch('/wallet')
        .then(r => r.json())
        .then(wallet => setWalletcryptos(wallet.walletcryptos))
    }, [])

    const handleDarkModeClick = () => {
      setIsDarkMode(isDarkMode => !isDarkMode)
    }

  function handleLogin(wallet) {
    setWalletKey(wallet.wallet_key)
    setWallet(wallet)
  }

  function handleAddCrypto(crypto) {
    setCryptos([...cryptos, crypto])
  }

  function handleAddWalletcrypto(walletcrypto) {
    setWalletcryptos([...walletcryptos, walletcrypto])
  }

  function handleDeleteWalletcrypto(deleted) {
    const filtered = walletcryptos.filter(walletcrypto => {
      return walletcrypto.id !== deleted.id   
    })
    setWalletcryptos(filtered)
  }

  if (!walletKey) return <Login onLogin={handleLogin} />

  return (
    // <main className='wrapper'>
    <main className={'wrapper '+ (isDarkMode ? "dark" : "light")}>
      {/* <div className={"App "+ (isDarkMode ? "dark" : "light")}> */}
        <Router>
          <NavBar walletKey={walletKey} setWalletKey={setWalletKey} onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
          <Routes>
            <Route
              path='/'
              element={<Wallet
                walletKey={walletKey}
                wallet={wallet}
                cryptos={cryptos}
                walletcryptos={walletcryptos}
                onAddWalletcrypto={handleAddWalletcrypto}
                onDeleteWalletcrypto={handleDeleteWalletcrypto}
              />}
            />
            <Route 
              path='/cryptos' 
              element={<Cryptos
                walletKey={walletKey}
                wallet={wallet}
                cryptos={cryptos}
                onAddCrypto={handleAddCrypto}
              />} 
            />
          </Routes>
        </Router>
      {/* </div> */}
    </main>
  );
}

export default App