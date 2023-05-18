import { useState } from "react"

function CreateAccountForm({ onLogin }) {
  const [wallet, setWallet] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(wallet)
    console.log(password)
    console.log(passwordConfirmation)
    setErrors([])
    setIsLoading(true)
    // setup route
    fetch('/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wallet,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then(r => {
      setIsLoading(false)
      if(r.ok) {
        r.json().then(user => onLogin(user))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Wallet Key </label>
        <input 
          type='text'
          id='wallet_key' // 'wallet'?
          autoComplete='off'
          value={wallet} // wallet_key?
          onChange={e => setWallet(e.target.value)}
        />
      </div>
      <div>
        <label>Password </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
        />
      </div>
      <div>
        <label>Password Confirmation </label>
        <input 
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          autoComplete='current-password'
        />
      </div>

      {/* <button type='submit'>Create 
      Account</button> */}
      <button type='submit'>{isLoading ? 'Loading...' : 'Create Account'}</button>

      {/*  */}

      {/* Where are errors coming from in backend? */}
      {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
    </form>
  )
}

export default CreateAccountForm