import {useEffect, useState} from "react"

function Cryptos({ walletKey }) { // walletKey needed?
  const [cryptos, setCryptos] = useState([])

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, [])

  const renderCryptos = cryptos.map(crypto => (
    <div key={crypto.id} className="card">
      <h2>{crypto.name}</h2>
      <h3>{crypto.symbol}</h3>
      <p>${crypto.price}</p>
    </div>
  ))

  return (
    <div>
      {renderCryptos}
    </div>
  )
}

export default Cryptos