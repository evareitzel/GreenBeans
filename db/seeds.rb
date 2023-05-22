puts "💰 Seeding Wallets..."
wallets = Wallet.create([ 
  { wallet_key: 'A4BAD', password: 'lGLzdBMto6' }, 
  { wallet_key: 'C79DE', password: 'ivamVGizbD' }, 
  { wallet_key: '629D4', password: 'JtldtEMkqQ' }
])

puts "🪙 Seeding Cryptos..."
cryptos = Crypto.create([ 
  {name: 'Bitcoin', symbol: 'BTC', price: '6929.82', quantity: 0 }, 
  {name: 'Ethereum', symbol: 'ETH', price: '404.98', quantity: 0 }, 
  {name: 'Komodo', symbol: 'KMD', price: '1.41', quantity: 0 }, 
  {name: 'Nano', symbol: 'NANO', price: '1.55', quantity: 0 }, 
  {name: 'Mithril', symbol: 'MITH', price: '0.48', quantity: 0 },
  {name: 'TRON', symbol: 'TRX', price: '0.03', quantity: 0 }
])

puts "💸 Seeding Walletcryptos..."
walletcryptos = Walletcrypto.create([
  {
    wallet_id: Wallet.first.id, 
    crypto_id: Crypto.first.id
  }, 
  {
    wallet_id: Wallet.first.id, 
    crypto_id: Crypto.second.id  
  }, 
  { 
    wallet_id: Wallet.second.id, 
    crypto_id: Crypto.third.id
  }, 
  { 
    wallet_id: Wallet.second.id, 
    crypto_id: Crypto.fourth.id 
  }, 
  { 
    wallet_id: Wallet.third.id, 
    crypto_id: Crypto.fifth.id
  },
  {
    wallet_id: Wallet.third.id,
    crypto_id: Crypto.last.id
  }
])

puts "✅ Done seeding!"
