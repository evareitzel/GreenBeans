puts "💰 Seeding Wallets..."
wallets = Wallet.create([ 
  { wallet_key: 'A4BAD', password: '111' }, 
  { wallet_key: 'C79DE', password: '222' }, 
  { wallet_key: '629D4', password: '333' }
])

puts "🪙 Seeding Cryptos..."
cryptos = Crypto.create([ 
  { name: 'Bitcoin', symbol: 'BTC', price: '6929.82' }, 
  { name: 'Ethereum', symbol: 'ETH', price: '404.98' }, 
  { name: 'Komodo', symbol: 'KMD', price: '1.41' }, 
  { name: 'Nano', symbol: 'NANO', price: '1.55' }, 
  { name: 'Mithril', symbol: 'MITH', price: '0.48' },
  { name: 'TRON', symbol: 'TRX', price: '0.03' }
])

puts "💸 Seeding Walletcryptos..."
walletcryptos = Walletcrypto.create([
  {
    wallet_id: Wallet.first.id, 
    crypto_id: Crypto.first.id,  
    quantity: 100
  }, 
  {
    wallet_id: Wallet.first.id, 
    crypto_id: Crypto.second.id,  
    quantity: 100
  }, 
  {
    wallet_id: Wallet.second.id, 
    crypto_id: Crypto.first.id,  
    quantity: 100
  }, 
  {
    wallet_id: Wallet.second.id, 
    crypto_id: Crypto.third.id,  
    quantity: 100
  }, 
  {
    wallet_id: Wallet.second.id, 
    crypto_id: Crypto.fourth.id,  
    quantity: 100
  }, 
  {
    wallet_id: Wallet.third.id,
    crypto_id: Crypto.fourth.id,  
    quantity:100
  },
  {
    wallet_id: Wallet.third.id, 
    crypto_id: Crypto.fifth.id,  
    quantity: 100
  },  
  {
    wallet_id: Wallet.third.id,
    crypto_id: Crypto.last.id,
    quantity: 100
])


puts "✅ Done seeding!"
