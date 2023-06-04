puts "💰 Seeding Wallets..."
wallets = Wallet.create([ 
  { wallet_key: 'A4BAD', password: '1' }, 
  { wallet_key: 'C79DE', password: '2' }, 
  { wallet_key: '629D4', password: '3' }
])

puts "🪙 Seeding Cryptos..."
cryptos = Crypto.create([ 
  { name: 'Bitcoin', symbol: 'BTC', price: '6929.82' }, 
  #, walletcryptos: [
    # { wallet_id: Wallet.first.id, crypto_id: Crypto.first.id, quantity: 10 },
    # { wallet_id: Wallet.first.id, crypto_id: Crypto.second.id, quantity: 20 }
  # ] 
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
    quantity: 10
  }, 
  {
    wallet_id: Wallet.first.id, 
    crypto_id: Crypto.second.id,  
    quantity: 10
  }, 
  { 
    wallet_id: Wallet.second.id, 
    crypto_id: Crypto.third.id,  
    quantity: 10
  }, 
  { 
    wallet_id: Wallet.second.id, 
    crypto_id: Crypto.fourth.id,  
    quantity: 10
  }, 
  { 
    wallet_id: Wallet.third.id, 
    crypto_id: Crypto.fifth.id,  
    quantity: 10
  },
  {
    wallet_id: Wallet.third.id,
    crypto_id: Crypto.last.id,  
    quantity:10
  }
])



puts "✅ Done seeding!"








# puts "🪙 Seeding Cryptos..."
# cryptos = Crypto.create([ 
#   {name: 'Bitcoin', symbol: 'BTC', price: '6929.82' }, 
#   {name: 'Ethereum', symbol: 'ETH', price: '404.98' }, 
#   {name: 'Komodo', symbol: 'KMD', price: '1.41' }, 
#   {name: 'Nano', symbol: 'NANO', price: '1.55' }, 
#   {name: 'Mithril', symbol: 'MITH', price: '0.48' },
#   {name: 'TRON', symbol: 'TRX', price: '0.03' }
# ])

# puts "💸 Seeding Walletcryptos..."
# walletcryptos = Walletcrypto.create([
#   {
#     wallet_id: Wallet.first.id, 
#     crypto_id: Crypto.first.id,  
#     quantity: 1
#   }, 
#   {
#     wallet_id: Wallet.first.id, 
#     crypto_id: Crypto.second.id,  
#     quantity: 2
#   }, 
#   { 
#     wallet_id: Wallet.second.id, 
#     crypto_id: Crypto.third.id,  
#     quantity: 3
#   }, 
#   { 
#     wallet_id: Wallet.second.id, 
#     crypto_id: Crypto.fourth.id,  
#     quantity: 4
#   }, 
#   { 
#     wallet_id: Wallet.third.id, 
#     crypto_id: Crypto.fifth.id,  
#     quantity: 5
#   },
#   {
#     wallet_id: Wallet.third.id,
#     crypto_id: Crypto.last.id,  
#     quantity:6
#   }
# ])


######

# puts "🪙 Seeding Cryptos..."
# cryptos = Crypto.create([ 
#   { name: 'Bitcoin', symbol: 'BTC', price: '6929.82', walletcryptos: [
#     { wallet_id: Wallet.first.id, quantity: 2 }, 
#     { wallet_id: Wallet.second.id, quantity: 2 }, 
#     { wallet_id: Wallet.third.id, quantity: 2 }
#   ] }, 
#   {name: 'Ethereum', symbol: 'ETH', price: '404.98', walletcryptos: [
#     { wallet_id: Wallet.first.id, quantity: 4 }, 
#     { wallet_id: Wallet.second.id, quantity: 4 }, 
#     { wallet_id: Wallet.third.id, quantity: 4 }
#   ] }, 
  # {name: 'Komodo', symbol: 'KMD', price: '1.41', walletcryptos: [
  #   { wallet_id: Wallet.first.id, quantity: 6 }, 
  #   { wallet_id: Wallet.second.id, quantity: 6 }, 
  #   { wallet_id: Wallet.third.id, quantity: 6 }
  # ] },
  # {name: 'Nano', symbol: 'NANO', price: '1.55', walletcryptos: [
  #   { wallet_id: Wallet.first.id, quantity: 8 }, 
  #   { wallet_id: Wallet.second.id, quantity: 8 }, 
  #   { wallet_id: Wallet.third.id, quantity: 8 }
  # ] }, 
  # {name: 'Mithril', symbol: 'MITH', price: '0.48', walletcryptos: [
  #   { wallet_id: Wallet.first.id, quantity: 10 }, 
  #   { wallet_id: Wallet.second.id, quantity: 10 }, 
  #   { wallet_id: Wallet.third.id, quantity: 10 }
  # ] },
  # {name: 'TRON', symbol: 'TRX', price: '0.03', walletcryptos: [
  #   { wallet_id: Wallet.first.id, quantity: 12 }, 
  #   { wallet_id: Wallet.second.id, quantity: 12 }, 
  #   { wallet_id: Wallet.third.id, quantity: 12 }
  # ] }
# ])
