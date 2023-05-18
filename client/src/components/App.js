import { React, useEffect, useState } from "react"
import '../App.css';

import Navbar from './Navbar'
import Login from './Login'
import Header from './Header'

function App() {
  const [wallet, setWallet] = useState(null)

  useEffect(() => {
    fetch('/wallet').then((res) => {
      if (res.ok) {
        res.json().then((wallet) => setWallet(wallet))
      }
    })
  }, [])

      // The onLogout callback function would handle removing the information about the wallet from state.


  function handleLogout(){
    setWallet(null)
    console.log('Hi from handleLogout in Home.js!')
  }


  if (wallet) {
    return (
      <main>
        <Header />
        <Navbar />
        <div  className="body">
           {/* , Wallet {wallet.wallet_key} */}
        </div>
      </main>
    )
  } else {
    return (
      <main>
        <Header />
        {/* <Navbar onLogout={handleLogout} />  */}
        {/* take homepage out of Navbar */}
        <div  className="body">
          <Login onLogin={setWallet} />
          </div>
      </main>
    )
  }
}

export default App

  // if (wallet) {
  //   return <h2>Welcome, Wallet number {wallet.walletKey}!</h2>;
  // } else {
  //   return <Login onLogin={setWallet} />;
  // }

// <div className="App">
// </div>


/////////////////////////////

// return (
//   <main>
//     <Navbar onLogout={logoutWallet} />
//     if (wallet) {
//     <h2>Welcome!</h2>
//     } else {
//       <Login onLogin={setWallet} />
//     }
//   </main>
// )
