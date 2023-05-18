import {useState} from "react"

function Login({ onLogin }) { // , onLogout
  const [walletKey, setWalletKey] = useState("") // 1/2 show ID at door (walletKey)

  // function handleLogout() { // figure out placement in component structure
  //   fetch('/logout', {
  //     method: 'DELETE',
  //   }).then(() => onLogout())
  // }

  
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ walletKey }),
    })
     .then((r) => r.json())
     .then((wallet) => onLogin(wallet)) // resolve callback func
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>Implement Login/Logout flow and authentications</p>
      <p>Get wallet_key and password digest</p>
      <input
        type='text'
        value={walletKey}
        onChange={(e) => setWalletKey(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;