import { useState } from "react"

function Card ({ crypto }){
  const [quantity, setQuantity] = useState(crypto.walletcryptos[0].quantity)

  function handleSubmit(e){
    setQuantity(e.target.value)
  }

  return(
    <li key={crypto.id} className="card">
      {/* {console.log(crypto.walletcryptos)} */}
      <h2>{crypto.name}</h2>
      <p><strong>{crypto.symbol}</strong> ${crypto.price}</p>
      <form onSubmit={handleSubmit} > 
        <div className='form-field'>
          <label>Quantity</label>
          <input 
            className="quantity-input"
            type='text'
            // id=
            value= {quantity} // {crypto.walletcryptos[0].quantity}
            autoComplete='off'
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <button type='submit' className='ghost-button'>Update Quantity</button>
      </form>

      <h3>${crypto.walletcryptos[0].quantity * crypto.price}</h3>
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


  // console.log(walletCryptos)


  // function onIncrementClick(crypto){
  //   setCryptoQuantity(crypto.quantity += 1)
  //   onIncrementCrypto(crypto, cryptoQuantity)
  // }


  // const [cryptoQuantity, setCryptoQuantity] = useState(1)


// <button className='incrementer' onClick={() => onIncrementClick(crypto)}>+</button> 
// <button className='decrementer'>-</button>
// onClick={onDecrementCryptos}
