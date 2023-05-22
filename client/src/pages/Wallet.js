function Wallet({ walletKey, cryptos }) {

  const renderCryptos = cryptos.map(crypto => (
    <li key={crypto.id} className="card">
      <h2>{crypto.name}</h2>
      <h3>{crypto.symbol}</h3>
      <p>${crypto.price}</p>
      <p>Quantity: {crypto.quantity} | Total: ${crypto.quantity * crypto.price}</p>
      <button className='incrementer'>+</button> 
      {/* onClick={onIncrementCryptos} */}
      <button className='decrementer'>-</button> 
      {/* onClick={onDecrementCryptos} */}
      { console.log({crypto}) }
    </li>
    
  ))

  return (
    <div>
      <h2>My Cryptos</h2>
      <h3>Wallet Key {walletKey}</h3>        {
          cryptos.length === 0 
          ? <p>Add cryptos</p> 
          : <ul className="list">{renderCryptos}</ul>
        }
      {/* <link>Add Cryptos (goes to Cryptos page)</link> */}
    </div>
  )
}

export default Wallet