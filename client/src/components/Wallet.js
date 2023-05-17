function Wallet({wallet}){

  const renderWallets = wallet.map(wal => (
    <div key={wal.wallet_key}>
      <p>{wal.wallet_key}</p>
      {/* show cryptos included in wallet (attn routes/controller) */}
      {/* console.log({wallet}) */}
    </div>
  ))

  // console.log(wallet.first.cryptos)
  
  return(
    <div>
      <h1>My Wallet</h1>
      {renderWallets}
    </div>
  )
}

export default Wallet;