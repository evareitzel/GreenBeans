import {useEffect, useState} from "react" // useState still needed?
import AddCryptoForm from "../components/AddCryptoForm"

function Cryptos() {
  const [cryptos, setCryptos] = useState([])
  var popularity = ""

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, []) // duplicated in AddWalletcryptoForm - move state up

  const renderCryptos = cryptos.map(crypto => (
    <li key={crypto.id} className='list-item'>
      <strong>{crypto.symbol}</strong> | {crypto.name} ${crypto.price}   
      {crypto.wallets.map(w => popularity + "⭐").join('')}
    </li>
  ))
  
  function handleAddCrypto(crypto) {
    setCryptos([...cryptos, crypto])
  } // move action up to App.js alongside cryptos fetch & state

  return (
    <>
      <ul className='list'>
        {renderCryptos}
      </ul>
      <AddCryptoForm onAddCrypto={handleAddCrypto}/>
    </>
  )
}

export default Cryptos