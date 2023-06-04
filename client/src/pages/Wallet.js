import { useNavigate } from "react-router-dom"
import Card from "../components/Card"

function Wallet({walletKey, walletcryptos}) { // cryptos, // wallet, // why can't i get cryptos & walletcryptos collections from wallet?
  const navigate = useNavigate()

  const renderCryptos = walletcryptos.map(walletcrypto => <Card walletcrypto={walletcrypto} key={walletcrypto.id} />)
    // const renderCryptos = cryptos.map(crypto => <Card crypto={crypto} key={crypto.id} />) // walletCrypto={walletCrypto} 

  return (
    <div>
      <h2>My Cryptos</h2>
      <h3>Wallet Key {walletKey}</h3>        
      {
        walletcryptos.length === 0 // wc. added
        ? <p>There are no cryptos in your wallet!<br /><button onClick={()=>{navigate('/cryptos')}} className='button'>Add cryptos</button></p>
        : <ul className="list">{renderCryptos}</ul>
      }
    </div>
  )
}

export default Wallet