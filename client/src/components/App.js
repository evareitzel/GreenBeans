import React, { useEffect, useState } from "react"

import NavBar from "./NavBar"
import Login from "../pages/Login"
// import Wallet from "../pages/Wallet"
// import Cryptos from "../pages/Cryptos"

function App() {
  const [wallet, setWallet] = useState(null)

  useEffect(() => {
    // auto-login
    fetch('/wallet').then(r => {
      if (r.ok) {
        r.json().then((wallet) => setWallet(wallet))
      }
    })
  }, [])

  if (!wallet) return <Login onLogin={setWallet} />

  return (
    <>
      <NavBar wallet={wallet} setWallet={setWallet} />
      <main>
        <p>Hi from App.js!</p>
      </main>
    </>
  );
}

export default App