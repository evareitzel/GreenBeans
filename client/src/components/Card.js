import { useState } from "react"

function Card ({ crypto }){
  const { id } = crypto  
  const [quantity, setQuantity] = useState(crypto.walletcryptos[0].quantity)
  const [total, setTotal] = useState(quantity * crypto.price)
  const [errors, setErrors] = useState([])


  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    fetch(`/walletcryptos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity
      }),
    })
    .then(r => {
      if(r.ok) {
        r.json().then(r => setTotal(r.crypto.walletcryptos[0].quantity * crypto.price))
      } else {
        r.json().then(err => 
        setErrors(err.errors))
        console.log(errors)
      }
    })
  }

  return(
    <li key={crypto.id} className="card">
      <p><strong>{crypto.symbol}</strong> ${crypto.price}</p>
      <h2>{crypto.name}</h2>
      <form onSubmit={handleSubmit} > 
        <div className='form-field'>
          <label>Quantity
            <input 
              className="quantity-input"
              type='text'
              id='quantity'
              value={quantity}
              autoComplete='off'
              onChange={e => setQuantity(e.target.value)}
            />
          </label>
          <button type='submit' className='quantity-button'>Update</button>
        </div>
        {errors.map(err => (
          <div key={err} className='error'>🗙 {err}</div>
        ))}
      </form>
      <p className='total'>$ {total}</p>
    </li>
  )
}

export default Card

// onRemoveCrypto
  //       <input
  //         className="form-input"
  //         type='text'
  //         autoComplete='off'
  //         onChange={e => setWalletKey(e.target.value)}
  //       />





  // function onIncrementClick(crypto){
  //   setCryptoQuantity(crypto.quantity += 1)
  //   onIncrementCrypto(crypto, cryptoQuantity)
  // }


  // const [cryptoQuantity, setCryptoQuantity] = useState(1)


// <button className='incrementer' onClick={() => onIncrementClick(crypto)}>+</button> 
// <button className='decrementer'>-</button>
// onClick={onDecrementCryptos}