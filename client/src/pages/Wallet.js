import Card from "../components/Card"
import AddWalletcryptoForm from "../components/AddWalletcryptoForm"

function Wallet({walletKey, wallet, cryptos, walletcryptos, onAddWalletcrypto, onDeleteWalletcrypto}) {

  if (!walletcryptos) return <h2>Loading...</h2>;

  const renderCards = walletcryptos.map(walletcrypto => <Card walletcrypto={walletcrypto} onDeleteWalletcrypto={onDeleteWalletcrypto} key={walletcrypto.id} />)

  return (
    <>
      <h2>My Cryptos</h2>
      <h3>Wallet Key {walletKey}</h3>        
      {
        walletcryptos.length === 0
        ? <p>There are no cryptos in your wallet 🥺<br />
        </p>
        : <ul className="list">{renderCards}</ul>
      }
      <AddWalletcryptoForm 
        wallet={wallet} 
        cryptos={cryptos}
        onAddWalletcrypto={onAddWalletcrypto} />  
    </>
  )
}

export default Wallet