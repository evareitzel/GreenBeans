import { React, useEffect, useState } from "react"
import '../App.css';

import Navbar from './Navbar'
// import Dashboard from './Dashboard'
import Login from './Login'

function App() {
  const [wallet, setWallet] = useState(null)

  useEffect(() => {
    fetch('/wallet').then((res) => {
      if (res.ok) {
        res.json().then((wallet) => setWallet(wallet))
      }
    })
  }, [])

  function handleLogin(wallet){
  //   // save the logged in user's details in state!
  //   // ? wasn't it already saved to state w setWalletKey in Login.js?
    console.log('hi from handleLogin in Home.js!')
    console.log(wallet) // wtf broke
  }

  // The onLogout callback function would handle removing the information about the wallet from state.
  function handleLogout(){
    setWallet(null)
    console.log('Hi from handleLogout in Home.js!')
  }


  if (wallet) {
    return (
      <main className="app">
        <Navbar wallet={wallet}/>
        {/* <Dashboard /> */}
      </main>
    )
  } else {
    return (
      <main className="app">
        <Navbar onLogout={handleLogout} />
        <Login onLogin={handleLogin} /> 
      </main>
    )
  }
}

export default App
