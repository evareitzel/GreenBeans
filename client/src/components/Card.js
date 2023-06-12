import { useState } from "react"

function Card ({walletcrypto, onDeleteWalletcrypto}){
  const {crypto, id} = walletcrypto
  const [errors, setErrors] = useState([])
  const [quantity, setQuantity] = useState(walletcrypto.quantity)
  const [total, setTotal] = useState(quantity * crypto.price)
  // const [total, setTotal] = useState(crypto.price)

  console.log(crypto.price)

  console.log(walletcrypto.total)
  function handleSubmit(e){
    e.preventDefault()
    setErrors([])
    const total_amt = quantity * crypto.price
    fetch(`/walletcryptos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
        total: total_amt// quantity * crypto.price
      }),
    }).then(r => {
      if(r.ok) {
        r.json().then(walletcrypto => setTotal(walletcrypto.total))
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
      <p className='total'>${walletcrypto.total}</p>
      {/* FIX to show 2 decimal points */}
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Quantity
          <input
            className="quantity-input"
            value={quantity}
            // type='text'
            id='quantity'
            autoComplete='off'
            onChange={e => setQuantity(e.target.value)}
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
