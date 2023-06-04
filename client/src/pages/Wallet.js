import { useNavigate } from "react-router-dom"
import Card from "../components/Card"

function Wallet({walletKey, walletcryptos, onDeleteWalletcrypto}) { // why can't i get walletcryptos collection from wallet?
  const navigate = useNavigate()

  const renderCryptos = walletcryptos.map(walletcrypto => <Card walletcrypto={walletcrypto} onDeleteWalletcrypto={onDeleteWalletcrypto} key={walletcrypto.id} />)

  return (
    <div>
      <h2>My Cryptos</h2>
      <h3>Wallet Key {walletKey}</h3>        
      {
        walletcryptos.length === 0
        ? <p>There are no cryptos in your wallet!<br /><button onClick={()=>{navigate('/cryptos')}} className='button'>Add cryptos</button></p>
        : <ul className="list">{renderCryptos}</ul>
      }
    </div>
  )
}

export default Wallet