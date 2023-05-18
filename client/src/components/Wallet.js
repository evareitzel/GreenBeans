function Wallet({wallet}){

  const renderWallets = wallet.map(wal => (
    <div key={wal.wallet_key}>
        {console.log("from renderWallets: ")}
        {console.log(wal.cryptos)}
      <h3>{wal.wallet_key}</h3>
      <p>{wal.cryptos.first}</p>
    </div>
  ))
  
  return(
    <div>
      <h1>My Wallet</h1>
      {renderWallets}
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
