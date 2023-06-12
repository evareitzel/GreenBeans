import {useState, useEffect} from "react"

function AddWalletcryptoForm({wallet, onAddWalletcrypto}) { 
  // cryptos,
  console.log(wallet)
  // console.log(cryptos)

  const [errors, setErrors] = useState([])
  const [quantity, setQuantity] = useState('1')
  const [total, setTotal] = useState(0)
  const [option, setOption] = useState()
  const [cryptos, setCryptos] = useState([])

  useEffect(() =>{
    fetch('/cryptos')
    .then(r => r.json())
    .then(cryptos => setCryptos(cryptos))
  }, []) // duplicated in Cryptos - move state up

  const renderOptions = cryptos.map(crypto => (
    <option 
      key={crypto.id}
      id='crypto_id'
      value={crypto.id} 
    >{crypto.symbol} • ${crypto.price}</option>
  ))

  function handleFormSubmit(e) {
    e.preventDefault()
    setErrors([])
    setTotal(quantity * crypto.price)

    fetch('/walletcryptos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wallet_id: wallet.id,
        crypto_id: option,
        quantity,
        total // FIX
      }),
    })
    .then(r => {
      if(r.ok) {
        r.json().then(walletcrypto => onAddWalletcrypto(walletcrypto))
        // .then(walletcrypto => window.alert(`Added to wallet!`))
        .then(window.alert(`Added to wallet!`))
      } else {
        r.json().then(err => setErrors(err.errors))
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



  // .then(walletcrypto => setPopularity(walletcrypto.wallets))
  // .then(walletcrypto => setPopularity(walletcrypto.wallets))

  // find crypto with updated wallet
  // then refresh state based on crypto.wallets (complex mapping w has-many-thru relationship)

  // setPopularity(crypto.wallets.map(w => popularity + "⭐").join('')))
