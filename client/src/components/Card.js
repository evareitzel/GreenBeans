import { useState } from "react"

function Card ({walletcrypto, onDeleteWalletcrypto}){
  const {crypto, id} = walletcrypto
  const [errors, setErrors] = useState([])
  const [quantity, setQuantity] = useState(walletcrypto.quantity)
  const [total, setTotal] = useState(quantity * crypto.price) // walletcrypto.total

  console.log(walletcrypto.total)
  function handleSubmit(e){
    e.preventDefault()
    setErrors([])
    // setTotal(quantity * crypto.price)
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
        r.json().then(r => console.log(r))
setTotal(quantity * crypto.price)
      //     // if(r.ok) {
      //       r.json().then(r => setTotal((r.crypto.walletcryptos[0].quantity * crypto.price))) // .toFixed(2)
      //       // define num --> 
      //       // still showing single decimal pt // parseFloat
    
      //       // r.json().then(r => setTotal((Math.round((r.crypto.walletcryptos[0].quantity * crypto.price) * 100 / 100)).toFixed(2))) 
          
      //   //   } else {
      //   //     r.json().then(err => 
      //   //     setErrors(err.errors))
          // }
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
      <p className='total'>$ {total}</p>
      {/* <p className='total'>$ {quantity * crypto.price}</p> */}
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
      {/* {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}*/}


      <button onClick={handleDeleteClick} className='small-button'>Remove</button>
    </li>
  )
}

export default Card



  // function handleSubmit(e) {
  //   e.preventDefault()
  //   setErrors([])
  //   fetch(`/walletcryptos/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       quantity
  //     }),
  //   })
  //   .then(r => {
  //     // if(r.ok) {
  //       r.json().then(r => setTotal((r.crypto.walletcryptos[0].quantity * crypto.price))) // .toFixed(2)
  //       // define num --> 
  //       // still showing single decimal pt // parseFloat

  //       // r.json().then(r => setTotal((Math.round((r.crypto.walletcryptos[0].quantity * crypto.price) * 100 / 100)).toFixed(2))) 
      
  //   //   } else {
  //   //     r.json().then(err => 
  //   //     setErrors(err.errors))
  //   //   }
  //   })
  // }



////////////////////
////////////////////
//////////////////// FROM PREVIOUS DRAFT

// import { useState } from "react"

// function Card ({ crypto }){
//   const { id } = crypto  
//   const [quantity, setQuantity] = useState(crypto.walletcryptos[0].quantity)
//   const [total, setTotal] = useState(quantity * crypto.price)
//   const [errors, setErrors] = useState([])


//   function handleSubmit(e) {
//     e.preventDefault()
//     setErrors([])
//     fetch(`/walletcryptos/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         quantity
//       }),
//     })
//     .then(r => {
//       // if(r.ok) {
//         r.json().then(r => setTotal((r.crypto.walletcryptos[0].quantity * crypto.price))) // .toFixed(2)
//         // define num --> 
//         // still showing single decimal pt // parseFloat

//         // r.json().then(r => setTotal((Math.round((r.crypto.walletcryptos[0].quantity * crypto.price) * 100 / 100)).toFixed(2))) 
      
//     //   } else {
//     //     r.json().then(err => 
//     //     setErrors(err.errors))
//     //   }
//     })
//   }

//   return(
//     <li key={crypto.id} className="card">
//       <p><strong>{crypto.symbol}</strong> ${crypto.price}</p>
//       <h2>{crypto.name}</h2>
      
//       <form onSubmit={handleSubmit} > 
//         <div className='form-field'>
//           <label>Quantity
//             <input 
//               className="quantity-input"
//               type='text'
//               id='quantity'
//               value={quantity}
//               autoComplete='off'
//               onChange={e => setQuantity(e.target.value)}
//             />
//           </label>
//           <button type='submit' className='quantity-button'>Update</button>
//         </div>

//         {/* {console.log(`errors: ${errors}`)} */}
        
//         {/* FIX - so validations throw correct errors  */}
//         {errors.map(err => (
//           console.log(err)
//           // <div key={err} className='error'>🗙 {err}</div>
//         ))}
//       </form>

//       <p className='total'>$ {total}</p>
//     </li>
//   )
// }

// export default Card

// // onRemoveCrypto
//   //       <input
//   //         className="form-input"
//   //         type='text'
//   //         autoComplete='off'
//   //         onChange={e => setWalletKey(e.target.value)}
//   //       />





//   // function onIncrementClick(crypto){
//   //   setCryptoQuantity(crypto.quantity += 1)
//   //   onIncrementCrypto(crypto, cryptoQuantity)
//   // }


//   // const [cryptoQuantity, setCryptoQuantity] = useState(1)


// // <button className='incrementer' onClick={() => onIncrementClick(crypto)}>+</button> 
// // <button className='decrementer'>-</button>
// // onClick={onDecrementCryptos}

////////////////////