function Wallet({wallet}){

  // console.log(wallet.first.cryptos)

  const renderWallets = wallet.map(wal => (
    <div key={wal.wallet_key}>
      <h3>{wal.wallet_key}</h3>
      
      {console.log("from renderWallets: ")}
      {console.log(wal.cryptos)}
      {/* {console.log(`from renderWallets: ${wal.cryptos}`)} */}

      <p>{wal.cryptos.first}</p>
       {/* show cryptos included in wallet (attn routes/controller) */}
       {/* console.log({wal.cryptos}) */}
    </div>
  ))

  // const c1 = wallet.first.cryptos
  // const renderCryptos = c1.map(crypto =>(
  //   // console.log(crypto)
  //   <p>{crypto}</p>
  // ))


  
  return(
    <div>
      <h1>My Wallet</h1>
      {renderWallets}
      {/* {renderCryptos} */}
    </div>
  )
}

export default Wallet;