import {useEffect, useState} from "react"

function Cryptos({wallet, onAddCrypto}) { // , cryptos
  const [cryptos, setCryptos] = useState([])
  const [quantity, setQuantity] = useState('1')
  const [symbol, setSymbol] = useState()
  // const [cryptoId, setCryptoId] = useState()

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, [])

  const renderCryptos = cryptos.map(crypto => (
    <li key={crypto.id}>{crypto.symbol} | {crypto.name} ${crypto.price}</li>
  )) 

  const renderSymbols = cryptos.map(crypto => (
    <option key={crypto.id} value={symbol} >{crypto.symbol}</option>
  ))

  // console.log(cryptos)
  function handleFormSubmit(e) {
    e.preventDefault()
    window.alert(`${symbol} added to Wallet!`)

    // console.log(e.target.value)
    console.log(crypto.id)
    console.log(e.target.value)

    // render AR validation errors

    fetch('/walletcryptos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wallet_id: wallet.id,
        crypto_id: 5, // FIX!!!!!! - get crypto id dynamically
        quantity
        // total
      }),
    })
    .then(r => r.json())
    
    
    .then(c => console.log(c))
    // .then(crypto => setWalletCryptos([crypto, ...walletCryptos]) // .sort() alphabetically by name
    // )


  // .then(walletcrypto => onAddCrypto(walletcrypto))
  }

  return (
    <>
    <form onSubmit={handleFormSubmit} className='form'>
      <ul className='list'>
        {renderCryptos}
      </ul>
      <h2>Add to Wallet</h2>
      <div className='form-field'>
        <label>Crypto </label>
        <select
          onChange={e => setSymbol(e.target.value)} 
          className='form-input' 
        >
          {renderSymbols}
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
  // show wallets that have crypto in it (serializer - has_many :wallets or attr :wallets) / no of wallets (popularity!)

    // const showPopularity = crypto.map(c => (
  //   <p>{"*" * c.walletcrypto.length}</p>
  // ))





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
