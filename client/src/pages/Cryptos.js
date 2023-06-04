import {useEffect, useState} from "react"

function Cryptos({wallet, onAddWalletcrypto}) {
  const [cryptos, setCryptos] = useState([])
  const [quantity, setQuantity] = useState('1')
  const [cryptoId, setCryptoId] = useState()
  const [errors, setErrors] = useState([])

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, [])

  const renderCryptos = cryptos.map(crypto => (
    <li key={crypto.id}><strong>{crypto.symbol}</strong> | {crypto.name} ${crypto.price}</li>
  )) 

  const renderSymbols = cryptos.map(crypto => (
    <option 
      key={crypto.id}
      id='crypto_id'
      value={crypto.id} 
    >{crypto.symbol}</option>
  ))

  function handleFormSubmit(e) {
    e.preventDefault()
    setErrors([])

    fetch('/walletcryptos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wallet_id: wallet.id,
        crypto_id: cryptoId,
        quantity
      }),
    })
    .then(r => {
      if(r.ok) {
        r.json().then(walletcrypto => onAddWalletcrypto(walletcrypto))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <>
      <ul className='list'>
        {renderCryptos}
      </ul>
    <form onSubmit={handleFormSubmit} className='form'>
      <h2>Add to Wallet</h2>
      <div className='form-field'>
        <label>Crypto </label>
        <select
          onChange={e => setCryptoId(e.target.value)}
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
      {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}
    </form>
    </>
  )
}

export default Cryptos



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
