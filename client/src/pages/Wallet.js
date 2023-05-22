function Wallet({ walletKey, wallet }) {

  console.log(wallet.cryptos)
  const renderCryptos = wallet.cryptos.map(crypto => (
    <li key={crypto.id} className="card">
      <h2>{crypto.name}</h2>
      <h3>{crypto.symbol}</h3>
      <p>${crypto.price}</p>
      <p>Total: (number of cryptos)</p>
      <p>$xxx (total amount invested)</p>
      <button className='button'>+</button> 
      {/* onClick={onIncreaseCryptos} */}
      <button className='ghost-button'>-</button> 
      {/* onClick={onDecreaseCryptos} */}
      <p>Remove from Wallet</p>
    </li>
  ))

  return (
    <div>
      <h2>My Cryptos</h2>
      <h3>Wallet Key {walletKey}</h3>
      <p>Increase/decrease cryptos (PATCH)</p>
      <p>Remove Cryptos (DELETE)</p>
      <ul className="list"> 
      {renderCryptos}
        {/* {cryptos.length == 0 ? <p>Add cryptos</p> : <p>render cryptos here</p>} {renderCryptos} */}
      </ul>
      {/* <link>Add Cryptos (goes to Cryptos page)</link> */}
    </div>
  )
}

export default Wallet