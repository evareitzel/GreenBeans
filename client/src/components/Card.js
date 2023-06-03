import { useState } from "react"

function Card ({ crypto }){
  const [quantity, setQuantity] = useState(null) // FIX --> crypto.walletcryptos[0].quantity
  
  return(

    <li key={crypto.id} className="card">
      {/* <p>{crypto.crypto_id}</p> */}
      {/* {console.log(crypto)} GET crypto.crypto */}
      {console.log(crypto.walletcryptos[0].quantity)}

      <h2>{crypto.name}</h2>
      <p><strong>{crypto.symbol}</strong> ${crypto.price}</p>
      <form> 
        {/* onSubmit={handleSubmit} */}
        <label>Quantity</label>
        <input 
          className="form-input"
          type='text'
          // id=
          value= {quantity} // {crypto.walletcryptos[0].quantity}
          autoComplete='off'
          onChange={e => setQuantity(e.target.value)}
        />
        <button type='submit' className='ghost-button'>Update Quantity</button>
      </form>

      <h3>${crypto.walletcryptos[0].quantity * crypto.price}</h3>
    </li>
  )
}

export default Card