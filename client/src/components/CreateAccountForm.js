import { useState } from "react"

function CreateAccountForm({ onLogin }) {
  const [walletKey, setWalletKey] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    setErrors([])
    // setIsLoading(true)
    fetch('/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        walletKey,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then(r => {
      // setIsLoading(false)
      if(r.ok) {
        r.json().then(walletKey => onLogin(walletKey))
      } else {
        // console.log('Errors!')
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form-field'>
        <label>Wallet Key </label>
        <input 
          className="form-input"
          type='text'
          id='wallet_key' // 'wallet'?
          autoComplete='off'
          value={walletKey} // wallet_key?
          onChange={e => setWalletKey(e.target.value)}
        />
      </div>
      <div className='form-field'>
        <label>Password </label>
        <input
          className="form-input"
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
        />
      </div>
      <div className='form-field'>
        <label>Password Confirmation </label>
        <input 
          className="form-input"
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          autoComplete='current-password'
        />
      </div>
      <div className='button-wrapper'>
        <button type='submit' className='button'>Create Account</button> 
      </div>
      {/* throwing a TypeError: Cannot read properties of undefined (reading 'map') */}
      {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
    </form>
  )
}

// errors are undefined (empty arr)
export default CreateAccountForm

// <button type='submit'>{isLoading ? 'Loading...' : 'Create Account'}</button>
