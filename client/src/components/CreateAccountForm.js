import { useState } from "react"

function CreateAccountForm({ onLogin }) {
  const [walletKey, setWalletKey] = useState('')
  const [password, setPassword] = useState('')      
  const [errors, setErrors] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    fetch('/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "wallet_key": walletKey,
        password
      }),
    })
    .then(r => {
      if(r.ok) {
        r.json().then(walletKey => onLogin(walletKey))
      } else {
        r.json().then(record => setErrors(record.errors))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form-field'>
        <label>Wallet Key 
          <input
            value={walletKey}
            onChange={e => setWalletKey(e.target.value)}
            type='text'
            autoComplete='off'
            className="form-input"
          />
        </label> 
      </div>
      <div className='form-field'>
        <label>Password 
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            className="form-input"
          />
        </label>
      </div>
      <div className='button-wrapper'>
        <button type='submit' className='button'>Create Account</button> 
      </div>

      {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}
    </form>
  )
}

export default CreateAccountForm