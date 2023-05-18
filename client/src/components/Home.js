import {useEffect, useState} from "react"
import Wallet from './Wallet'
import Cryptos from './Cryptos'
// import Login from './Login'


export default function Home(){
  const [wallet, setWallet] = useState([])
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    fetch('/wallets')
    .then(r => r.json())
    .then(wallets => {
      //  filter wallets for current user/wallet
      // render current wallet
      setWallet(wallets)
        console.log(`from Home.js: `)
        console.log({wallets})
    })
    // .then(wallet.map(wallet => console.log(wallet))) //// REF
    // .then(r => console.log(r))
  }, []);

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    // .then(r => r.map(x => console.log(x)))
    .then(cryptos => setCryptos(cryptos))
  }, [])

  function handleLogin(wallet){
    // save the logged in user's details in state!
    // ? wasn't it already saved to state w setWalletKey in Login.js?
    console.log('hi from handleLogin in Home.js!')
    console.log(wallet)
  }

  return(
    <div className="body">
      {/* <h2>{wallet.wallet_key}'s Cryptos</h2> */}
      <Wallet wallet={wallet} />
      <hr className="hr" />
      <Cryptos cryptos={cryptos} />
      {/* <hr className="hr" /> */}
      {/* <Login onLogin={handleLogin} /> */}
    </div>
  )
}
