function Wallet({wallet}){

  console.log(wallet)
  
  // const renderWallets = wallet.map(wal => (
  //   <div key={wal.wallet_key}>
  //       {console.log(wal.cryptos)}
  //     <h3>{wal.wallet_key}</h3>
  //   </div>
  // ))
  
  return(
    <div>
      <h1>My Wallet</h1>
      <p>Render walletcryptos here (READ)</p>
      <p>Add walletcrypto (CREATE/POST)</p>
      <p>Increase/decrease walletcryptos (UPDATE/PATCH)</p>
      <p>Delete walletcrypto (DESTROY/DELETE)</p>

      {/* {renderWallets} */}
    </div>
  )
}

export default Wallet;




  // const c1 = wallet.first.cryptos
  // const renderCryptos = c1.map(crypto =>(
  //   // console.log(crypto)
  //   <p>{crypto}</p>
  // ))

  // {/* {renderCryptos} */}
