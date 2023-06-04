import { useNavigate } from "react-router-dom"
import Card from "../components/Card"

function Wallet({ walletKey, cryptos }) {
  const navigate = useNavigate()
  const renderCryptos = cryptos.map(crypto => <Card crypto={crypto} key={crypto.id} />)

  return (
    <div>
      <h2>My Cryptos</h2>
      <h3>Wallet Key {walletKey}</h3>        
      {
        cryptos.length === 0 
        ? <p>There are no cryptos in your wallet!<br /><button onClick={()=>{navigate('/cryptos')}} className='button'>Add cryptos</button></p>
        : <ul className="list">{renderCryptos}</ul>
      }
    </div>
  )
}

export default Wallet