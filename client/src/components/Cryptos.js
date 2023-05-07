function Cryptos({cryptos}){

  const renderCryptos = cryptos.map(crypto => (
    // console.log(crypto)
    <div key={crypto.id}>
      <h2>{crypto.name}</h2>
      <h3>{crypto.symbol}</h3>
      <p>{crypto.price}</p>
    </div>
  ))

  return(
    <div className="body">
      <h1>Cryptos</h1>
        {renderCryptos}
    </div>
  )
}

export default Cryptos;

{/* <li></li>
    <Cryptos
      cryptos={cryptos}
    />  */}