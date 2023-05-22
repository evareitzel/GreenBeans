function Wallet({ walletKey }) {

  console.log(walletKey)
  return (
    <div>
      <h2>Wallet Key xxxxx {walletKey}</h2> {/* fix */}
      <p>My Cryptos</p>
      <p>(render cryptos here)</p>
      <p>Increase/decrease cryptos (PATCH)</p>
      <p>Remove Cryptos (DELETE)</p>
      {/* <link>Add Cryptos (goes to Cryptos page)</link> */}
    </div>
  )
}

export default Wallet