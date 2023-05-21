import { useState } from "react"

function LoginForm({ onLogin }) {
  const [walletKey, setWalletKey] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ walletKey, password }),
    }).then(r => { // console.log(r)
      if (r.ok) {
        r.json().then(walletKey => onLogin(walletKey))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }
  
  console.log({walletKey})
  console.log({password})

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form-field'>
        <label>Wallet Key </label>
        <input 
          className="form-input"
          type='text'
          id='wallet_key'
          autoComplete='off'
          value={walletKey}
          onChange={e => setWalletKey(e.target.value)}
        />
      </div>
      <div className='form-field'>
        <label>Password </label>
        <input
          className="form-input"
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='button-wrapper'>
        <button type='submit' className='button'>Log In</button> 
      </div>
      {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
    </form>
  )
}

export default LoginForm