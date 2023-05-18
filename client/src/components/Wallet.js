function Wallet({wallet}){

  // console.log(wallet.first.cryptos)

  const renderWallets = wallet.map(wal => (
    <div key={wal.wallet_key}>
      <h3>{wal.wallet_key}</h3>
      <p>{wal.cryptos.first}</p>
       {/* show cryptos included in wallet (attn routes/controller) */}
       {/* console.log({wal.cryptos}) */}
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