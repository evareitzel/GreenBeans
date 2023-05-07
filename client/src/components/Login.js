
function Login() { // ({ onLogin })
  // const [walletKey, setWalletKey]
  
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ walletKey }),
  //   })
  //   .then((r) => r.json())
  //   .then((wallet) => onLogin(wallet));
  // }

  return (
    <form  className="body">
    {/* <form onSubmit={handleSubmit}> */}
      <input
        // type='text'
        // value={walletKey}
        // onChange={(e) => setWalletKey(e.target.value)}
      />
      <button type='submit' className ="button">Login</button>
    </form>
  );
}

export default Login;