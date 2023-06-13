import { useState } from "react"

function Card ({walletcrypto, onDeleteWalletcrypto}){
  const {crypto, id} = walletcrypto
  const [errors, setErrors] = useState([])
  const [quantity, setQuantity] = useState(walletcrypto.quantity)
  const [total, setTotal] = useState(walletcrypto.quantity * walletcrypto.crypto.price)

  function handleSubmit(e){
    e.preventDefault()
    setErrors([])
    fetch(`/walletcryptos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
        total: quantity * crypto.price
      }),
    }).then(r => {
      if(r.ok) {
        r.json().then(walletcrypto => setTotal(walletcrypto.total)
        )
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
      <h2>{crypto.name}</h2>
      <p><strong>{crypto.symbol}</strong> ${crypto.price}</p>
      <p className='total'>${((total * 100) / 100).toFixed(2)}</p>

      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Quantity
          <input
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            type='text'
            className="quantity-input"
          />
          </label>
          <button type='submit' className='update-button'>Update</button>
        </div>
        
        {errors.map(err => (
          <div key={err} className='error'>🗙 {err}</div>
        ))}
      </form>
      
      <button onClick={handleDeleteClick} className='small-button'>Remove</button>
    </li>
  )
}

export default Card