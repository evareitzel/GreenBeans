import {useEffect, useState} from "react"
import Wallet from "./Wallet"
import Cryptos from "./Cryptos"


function Home(){

  const [wallet, setWallet] = useState([])
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    fetch("/wallet") // "wallets"
    // .then((r) => console.log(r.json()))
    .then(r => r.json())
    .then(wallets => {
      //  filter wallets for current user/wallet
      // setWallet(wallet)
    }) // (filter & render data for a single user)
    // .then(r => r.map(x => console.log(x))) ////////
    // .then(console.log(res)); // setWallets 
  }, []);

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    // .then(r => r.map(x => console.log(x)))
    .then(cryptos => setCryptos(cryptos))
  }, [])

  return(
    <div>
      <h2>{wallet.name}'s Cryptos</h2>
      <Wallet />
      {/* {wallets} */}
      <hr className="hr"/>
      <Cryptos cryptos={cryptos}/>
    </div>
  )
}

export default Home;