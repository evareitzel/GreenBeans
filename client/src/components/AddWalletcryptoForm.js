import {useState, useEffect} from "react"

function AddWalletcryptoForm({wallet, onAddWalletcrypto}) { 
  const [cryptos, setCryptos] = useState([])
  const [errors, setErrors] = useState([])
  const [quantity, setQuantity] = useState('100')
  const [option, setOption] = useState('1')

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, []) // duplicated in Cryptos - move state up

  const renderOptions = cryptos.map(crypto => {
    return(
      <option 
        key={crypto.id}
        id='crypto_id'
        value={crypto.id}
      >
        {crypto.symbol} • ${crypto.price}
      </option>
    )
  })

  function handleFormSubmit(e) {
    e.preventDefault()
    setErrors([])
    // setTotal

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
        // r.json().then(r => console.log(r))
        r.json()
        .then(walletcrypto => {
          // console.log(walletcrypto)
          onAddWalletcrypto(walletcrypto)
        })
        setQuantity('100')
      } else {
        r.json().then(record => setErrors(record.errors))
      }
    })
  }

  return(
    <form onSubmit={handleFormSubmit} className='form'> 
    <h2>Add to Wallet</h2>
    <div className='form-field'>
      <label>Crypto</label>
      <select
        onChange={e => setOption(e.target.value)}
        className='form-input' 
      >
        {renderOptions}
      </select>
    </div>
    <div className='form-field'>
    <label>Quantity 
      <input 
        className='form-input'
        type='text'
        id='quantity'
        value={quantity}
        autoComplete='off'
        onChange={e => setQuantity(e.target.value)}
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