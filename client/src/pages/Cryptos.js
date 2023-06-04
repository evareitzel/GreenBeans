import {useEffect, useState} from "react"

function Cryptos({ onAddCrypto, walletCryptos }) {
  const [cryptos, setCryptos] = useState([])
  const [quantity, setQuantity] = useState('1')

  console.log(cryptos)

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, [])

  // show wallets that have crypto in it (serializer - has_many :wallets or attr :wallets) / no of wallets (popularity!)

    // const showPopularity = crypto.map(c => (
  //   <p>{"*" * c.walletcrypto.length}</p>
  // ))

  const listCryptos = cryptos.map(crypto => (
    <li> 
      {crypto.symbol} | {crypto.name} ${crypto.price}
      {console.log(crypto.walletCryptos)}
    </li>
  )) 

  const renderCryptos = cryptos.map(crypto => (
    <option key={crypto.id} value={crypto.id}>
      {crypto.symbol}
    </option>
  ))

  return (
    <>
    <form onSubmit={() => onAddCrypto(crypto, quantity)} className='form'>
      <ul className='list'>
        {listCryptos}
      </ul>
      <h2>Add to Wallet</h2>
      <div className='form-field'>
        <label>Crypto </label>
        <select className='form-input'>
          {renderCryptos}
        </select>
      </div>
      <div className='form-field'>
      <label>Quantity </label>
        <input 
          className='form-input'
          type='text'
          id='quantity'
          value={quantity}
          autocomplete='off'
          onChange={e => setQuantity(e.target.value)}
        />
        </div>
      <button className='button' type='submit'>Add to Wallet</button>
    </form>
    </>
  )
}

export default Cryptos



// const renderCryptos = cryptos.map(crypto => (
//   <li key={crypto.id} className="card">
//     <h2>{crypto.name}</h2>
//     <h3>{crypto.symbol}</h3>
//     <p>${crypto.price}</p>
//     <button className='button' onClick={() => onAddCrypto(crypto)}>Add to Wallet</button>
//     {/* include a field for user input (starts at 1 and then walletholder can specify in a txt field) */}
//   </li>
// ))


  // walletCryptos.get(crypto) ? 'Remove from wallet' : 'Add to Wallet'
  // {walletCryptos.find(crypto) ? 'Remove from wallet' : 'Add to Wallet'}
