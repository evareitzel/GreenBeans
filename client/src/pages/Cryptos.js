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

  const renderCryptos = cryptos.map(crypto => ( // × TypeError: Cannot read properties of undefined (reading 'symbol')
    <li key={crypto.id} className='list-item'>
      <strong>{crypto.symbol}</strong> | {crypto.name} ${crypto.price}   
      {crypto.wallets.map(w => popularity + "⭐").join('')}
    </li>
  ))
  
  function handleAddCrypto(crypto) {
    setCryptos([...cryptos, crypto])
  }

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