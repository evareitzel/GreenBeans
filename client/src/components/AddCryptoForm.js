import { useState } from "react"

function AddCryptoForm({onAddCrypto}) {
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState([])

  function handleFormSubmit(e) {
    e.preventDefault()
    setErrors([])

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
        r.json().then(crypto => onAddCrypto(crypto))
      } else {
        r.json().then(record => setErrors(record.errors))
      }
    })
    setSymbol('')
    setName('')
    setPrice('')
  }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <h2>Import new crypto</h2>
      <div className='form-field'>
        <input 
          value={symbol}            onChange={e => setSymbol(e.target.value)}
          type='text'
          className='form-input'
          placeholder='Symbol'
        />
      </div>
      <div className='form-field'>
        <input 
          value={name}
          onChange={e => setName(e.target.value)}
          type='text'
          className='form-input'
          placeholder='Name'
        />
      </div>
      <div className='form-field'>
        <input 
          value={price}
          onChange={e => setPrice(e.target.value)}
          type='text'
          className='form-input'
          placeholder='Price'
        />
      </div>
      <button type='submit' className='ghost-button'>Import new crypto</button>
      {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}
    </form>
  )
}

export default AddCryptoForm