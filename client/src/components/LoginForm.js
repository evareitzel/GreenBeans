import { useState } from "react"

function LoginForm({onLogin}) {
  const [loginWalletKey, setLoginWalletKey] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
console.log(loginWalletKey)
  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        "wallet_key": loginWalletKey, 
        password
      }),
    }).then(r => {
      if (r.ok) {
        r.json()
        .then(loginWalletKey => onLogin(loginWalletKey))
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
          value={loginWalletKey}
          onChange={e => setLoginWalletKey(e.target.value)}
          type='text'
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
        <button type='submit' className='button'>Log In</button> 
      </div>
      
      {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}
    </form>
  )
}

export default LoginForm