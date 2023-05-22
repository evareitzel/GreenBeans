import {useEffect, useState} from "react"

function Cryptos({ walletKey, onAddCrypto }) { // walletKey needed? 
  const [cryptos, setCryptos] = useState([])

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, [])

  const renderCryptos = cryptos.map(crypto => (
    <li key={crypto.id} className="card">
      <h2>{crypto.name}</h2>
      <h3>{crypto.symbol}</h3>
      <p>${crypto.price}</p>
      <button className='ghost-button' onClick={onAddCrypto}>Add to Wallet</button>
    </li>
  ))

  return (
    <ul className="list">
      {renderCryptos}
    </ul>
  )
}

export default Cryptos