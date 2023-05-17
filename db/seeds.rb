puts "💰 Seeding Wallets..."
wallets = Wallet.create([ 
  { wallet_key: '93D7CD8DD467B5A7D7E1AEC91B16D', password_digest: 'iLd%4#)+yA4!Z*q' }, 
  { wallet_key: '8436A6BCFD54F38D8D29AEA9FEA85', password_digest: '>Ux.mx%%psdo9J(' }, 
  { wallet_key: '12797695162E9287B26E86249A132', password_digest: 'i.u;@0j:/$qkPo,' }, 
  { wallet_key: 'B51C6A2FCBF98A28746159829CDE3', password_digest: 'DJgkPN?2}sIF>v=' }
])

puts "🪙 Seeding Cryptos..."
cryptos = Crypto.create([ 
  {name: 'Bitcoin', symbol: 'BTC', price: '6929.82' }, # add cryptos here?
  {name: 'Ethereum', symbol: 'ETH', price: '404.98' }, 
  {name: 'Komodo', symbol: 'KMD', price: '1.41' }, 
  {name: 'Tether', symbol: 'USDT', price: '1.00' }, 
  {name: 'Dogecoin', symbol: 'DOGE', price: '0.00' }, 
  {name: 'Nano', symbol: 'NANO', price: '1.55' }, 
  {name: 'Mithril', symbol: 'MITH', price: '0.48' },
  {name: 'TRON', symbol: 'TRX', price: '0.03' }
])

puts "💸 Seeding Walletcryptos..."

walletcryptos = Walletcrypto.create([
  {
    wallet_id: Wallet.first.id, 
    crypto_id: Crypto.first.id
    # add second crypto here?
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
  # , 
  # { wallet_id: Wallet.fourth.id, crypto_id: Crypto[6].id }, 
  # { wallet_id: Wallet.fourth.id, crypto_id: Crypto[7].id }
])

# cryptos: {
#   crypto_id: Crypto.first.id, crypto_id: Crypto.second.id
# }


# walletcryptos = Walletcrypto.create([
#   { 
#     wallet_id: Wallet.first.id, 
#     crypto_id: Crypto.first.id 
#   }, 
#   { 
#     wallet_id: Wallet.first.id, 
#     crypto_id: Crypto.second.id 
#   }, 
#   { 
#     wallet_id: Wallet.second.id, 
#     crypto_id: Crypto.third.id
#   }, 
#   { 
#     wallet_id: Wallet.second.id, 
#     crypto_id: Crypto.fourth.id 
#   }, 
#   { 
#     wallet_id: Wallet.third.id, 
#     crypto_id: Crypto.fifth.id
#   },

#   {
#     wallet_id: Wallet.third.id,
#     crypto_id: Crypto.sixth.id
#   }
# ]) 

puts "✅ Done seeding!"

 # , 
  # { wallet_id: Wallet.fourth.id, crypto_id: Crypto[6].id }, 
  # { wallet_id: Wallet.fourth.id, crypto_id: Crypto[7].id }