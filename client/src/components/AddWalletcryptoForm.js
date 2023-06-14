import { useState } from "react"

function AddWalletcryptoForm({wallet, cryptos, onAddWalletcrypto}) {
  const [quantity, setQuantity] = useState('100')
  const [option, setOption] = useState('1')
  const [errors, setErrors] = useState([])

  if (!cryptos) return <h1>Loading...</h1>;

  const renderOptions = cryptos.map(crypto => (
    <option value={crypto.id} key={crypto.id}>
      {crypto.symbol} • ${crypto.price}
    </option>
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
        crypto_id: option,
        quantity
      }),
    })
    .then(r => {
      if(r.ok) {
        r.json().then(walletcrypto => onAddWalletcrypto(walletcrypto))
      } else {
        r.json().then(record => setErrors(record.errors))
      }
    })
    setQuantity('100')
  }
  
  return(
    <form onSubmit={handleFormSubmit} className='form'> 
    <h2>Add to Wallet</h2>
    <div className='form-field'>
      <label>Crypto</label>
      <select onChange={e => setOption(e.target.value)} className='form-input'>
        {renderOptions}
      </select>
    </div>
    <div className='form-field'>
    <label>Quantity 
      <input 
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        type='text'
        className='form-input'
      />
      </label>
      </div>
    <button className='button' type='submit'>Add to Wallet</button>
    
    {errors.map(err => (
      <div key={err} className='error'>🗙 {err}</div>
    ))}
  </form>
  )
}

export default AddWalletcryptoForm