import {useState} from "react"

function AddCryptoForm({onAddCrypto}) {
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState([])

  function handleFormSubmit(e) {
    e.preventDefault()
    // console.log('AddCryptoForm submitted!')
    setErrors([])
    // document.querySelector(symbol).value = ''
    // symbol.value = ''
    // name.value = ''
    // price.value = ''

    fetch('cryptos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symbol,
        name,
        price
      }),
    })

    .then(r => {
      if (r.ok) {
        // r.json().then(r => console.log(r))
        r.json().then(crypto => onAddCrypto(crypto))
    // update cryptos state w new crypto
      } else {
        r.json().then(record => setErrors(record.errors))
      }
    })    
  }
  // function handleFormSubmit(e) {
  //   e.preventDefault()
  //   setErrors([])
  //   setTotal(quantity * crypto.price)

  //   fetch('/walletcryptos', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       wallet_id: wallet.id,
  //       crypto_id: cryptoId,
  //       quantity,
  //       total // FIX
  //     }),
  //   })
  //   .then(r => {
  //     if(r.ok) {
  //       r.json().then(walletcrypto => onAddWalletcrypto(walletcrypto))
  //       .then(walletcrypto => window.alert(`Added to wallet!`))
  //       // .then(walletcrypto => setPopularity(walletcrypto.wallets))
  //       // setPopularity(crypto.wallets.map(w => popularity + "⭐").join('')))
  //     } else {
  //       r.json().then(err => setErrors(err.errors))
  //     }
  //   })
  // }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <h2>Import new crypto</h2>

      <div className='form-field'>
        <label>Symbol
          <input 
            className='form-input'
            type='text'
            id='symbol' // needed?
            value={symbol}
            autoComplete='off' // needed?
            onChange={e => setSymbol(e.target.value)}
          />
        </label>
      </div>

      <div className='form-field'>
        <label>Name
          <input 
            className='form-input'
            type='text'
            id='name' // needed?
            value={name}
            autoComplete='off' // needed?
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>

      <div className='form-field'>
        <label>Price
          <input 
            className='form-input'
            type='text'
            id='price' // needed?
            value={price}
            autoComplete='off' // needed?
            onChange={e => setPrice(e.target.value)}
          />
        </label>
      </div>

      <button type='submit' className='ghost-button'>Import new crypto</button>
      {/* render errors */}
      {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}
    </form>
  )
}

export default AddCryptoForm