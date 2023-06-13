import AddCryptoForm from "../components/AddCryptoForm"

function Cryptos({cryptos, onAddCrypto}) {
  var popularity = ""

  const renderCryptos = cryptos.map(crypto => (
    <li key={crypto.id} className='list-item'>
      <strong>{crypto.symbol}</strong> | {crypto.name} ${crypto.price}   
      {crypto.wallets.map(w => popularity + "⭐").join('')}
    </li>
  ))
  
  return (
    <>
      <ul className='list'>
        {renderCryptos}
      </ul>
      <AddCryptoForm onAddCrypto={onAddCrypto}/>
    </>
  )
}

export default Cryptos