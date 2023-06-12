import { useState } from "react"

function Card ({walletcrypto, onDeleteWalletcrypto}){
  const {crypto, id} = walletcrypto
  const [errors, setErrors] = useState([])
  const [quantity, setQuantity] = useState(walletcrypto.quantity)
  const [total, setTotal] = useState(walletcrypto.quantity * walletcrypto.crypto.price)

  // console.log(total) // should be walletcrypto.total
  // console.log(crypto.price)

  function handleSubmit(e){
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
    }).then(r => {
      if(r.ok) {
        r.json()
        // .then(r => console.log(r))
        .then(r => setTotal(r.quantity * r.crypto.price))
      } else {
        r.json().then(err => 
        setErrors(err.errors))
      }
    })
  }

  function handleDeleteClick(){
    fetch(`/walletcryptos/${id}`, {
      method: 'DELETE',
    })
    onDeleteWalletcrypto(walletcrypto)
  }

  return(
    <li key={crypto.id} className="card">
      <p><strong>{crypto.symbol}</strong> ${crypto.price}</p> {/* ////ERROR//// TypeError: Cannot read properties of undefined (reading 'symbol') */}
      <h2>{crypto.name}</h2>
      <p className='total'>${total}</p>
      {/* FIX to show 2 decimal points */}
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Quantity
          <input
            // id='quantity'
            // autoComplete='off'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            type='text'
            className="quantity-input"
          />
          </label>
          <button type='submit' className='quantity-button'>Update</button>
        </div>
      </form>
      {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}


      <button onClick={handleDeleteClick} className='small-button'>Remove</button>
    </li>
  )
}

export default Card
