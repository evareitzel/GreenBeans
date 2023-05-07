import React from "react"
import '../App.css';

import Navbar from "./Navbar"

function App() {
  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// import { useEffect } from 'react';
// import '../App.css';
// import {
//   Routes, // instead of "Switch"  
//   Route
// } from 'react-router-dom'
// import '../stylesheets/App.css'


// import Wallet from "./Wallet"
// import Cryptos from "./Cryptos"
// import Login from "./Login"


  // const [wallet, setWallet] = useState(null);

  // useEffect(() => {
  //   fetch("/wallet").then((response) => {
  //     if (response.ok) {
  //       response.json().then((wallet) => setWallet(wallet));
  //     }
  //   });
  // }, []);

  // if (wallet) {
  //   return <h2>Welcome, Wallet number {wallet.walletKey}!</h2>;
  // } else {
  //   return <Login onLogin={setWallet} />;
  // }


// function handleLogout(){
  // handle onLogout prop
  // onLogout = handleLogout
// }

// <div className="App">
// </div>


