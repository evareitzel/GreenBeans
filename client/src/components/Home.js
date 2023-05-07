import {useEffect, useState} from "react"
import Wallet from "./Wallet"
import Cryptos from "./Cryptos"


function Home(){

  const [wallets, setWallets] = useState([])
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    fetch("/wallets")
    // .then((r) => console.log(r.json()))
    .then(r => r.json())
    // .then(setWallets) // (filter & render data for a single user)
    // .then(r => r.map(x => console.log(x))) ////////
    // .then(console.log(res)); // setWallets 
  }, []);

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    // .then(r => r.map(x => console.log(x)))
    .then(cryptos => setCryptos(cryptos))
  }, [])

  const renderCryptos = cryptos.map(crypto => {
    console.log(crypto)
    // <li></li>
  })

  return(
    <div>
      {renderCryptos}
      <Wallet />
      {/* {wallets} */}
      <hr className="hr"/>
      <Cryptos />
    </div>
  )
}

export default Home;