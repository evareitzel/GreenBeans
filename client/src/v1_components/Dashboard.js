import {useEffect, useState} from "react"
import Wallet from './Wallet'
import Cryptos from './Cryptos'
import Login from './Login'
// import Logout from './Logout'

export default function Dashboard(){
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

  return(
    <div className="body">
      <Wallet wallet={wallet} />
      <hr className="hr" />
      <Cryptos cryptos={cryptos} />
    </div>
  )
}
