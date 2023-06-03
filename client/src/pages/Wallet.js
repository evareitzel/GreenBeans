import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../components/Card"


function Wallet({ walletKey, cryptos }) {
  const [quantity, setQuantity] = useState(null) // FIX --> crypto.walletcryptos[0].quantity
  const navigate = useNavigate()


  const renderCryptos = cryptos.map(crypto => ( 
    ////// make new card component so quantity state can be for ea individual
    
    <Card crypto={crypto} />

    // <li key={crypto.id} className="card">
    //   {/* <p>{crypto.crypto_id}</p> */}
    //   {/* {console.log(crypto)} GET crypto.crypto */}
    //   {console.log(crypto.walletcryptos[0].quantity)}

    //   <h2>{crypto.name}</h2>
    //   <p><strong>{crypto.symbol}</strong> ${crypto.price}</p>
    //   <form> 
    //     {/* onSubmit={handleSubmit} */}
    //     <label>Quantity</label>
    //     <input 
    //       className="form-input"
    //       type='text'
    //       // id=
    //       value= {quantity} // {crypto.walletcryptos[0].quantity}
    //       autoComplete='off'
    //       onChange={e => setQuantity(e.target.value)}
    //     />
    //     <button type='submit' className='ghost-button'>Update Quantity</button>
    //   </form>

    //   <h3>${crypto.walletcryptos[0].quantity * crypto.price}</h3>
    // </li>
  ))

  return (
    <div>
      <h2>My Cryptos</h2>
      <h3>Wallet Key {walletKey}</h3>        
      {
        cryptos.length === 0 
        ? <p>There are no cryptos in your wallet!<br /><button onClick={()=>{navigate('/cryptos')}} className='button'>Add cryptos</button></p>
        : <ul className="list">{renderCryptos}</ul>
      }
    </div>
  )
}

export default Wallet


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
