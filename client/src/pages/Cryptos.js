import {useEffect, useState} from "react" // useState still needed?
import AddCryptoForm from "../components/AddCryptoForm"

function Cryptos() { // {wallet}

  const [cryptos, setCryptos] = useState([])
  // const [quantity, setQuantity] = useState('1')
  // const [cryptoId, setCryptoId] = useState()
  // const [errors, setErrors] = useState([])
  // const [total, setTotal] = useState(0)
  // const [popularity, setPopularity] = useState([])

  // console.log(cryptoId) // undefined until a click is made (BTC has correct id when returned to  - callback func needed? // () => {} )

  var popularity2 = ""

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, []) // duplicated in AddWalletcryptoForm - move state up

  const renderCryptos = cryptos.map(crypto => ( // × TypeError: Cannot read properties of undefined (reading 'symbol')
    <li key={crypto.id} className='list-item'>
      <strong>{crypto.symbol}</strong> | {crypto.name} ${crypto.price}   
      {crypto.wallets.map(w => popularity2 + "⭐").join('')}
      {/* {popularity.map(w => popularity2 + "⭐").join('')} */}
    </li>
  ))
  
  function handleAddCrypto(crypto) {
    setCryptos([crypto, ...cryptos])
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