puts "💸 Seeding Wallets..."

wallets = Wallet.create([ 
  { wallet_key: '93D7CD8DD467B5A7D7E1AEC91B16D', password_digest: 'iLd%4#)+yA4!Z*q' }, 
  { wallet_key: '8436A6BCFD54F38D8D29AEA9FEA85', password_digest: '>Ux.mx%%psdo9J(' }, 
  { wallet_key: '12797695162E9287B26E86249A132', password_digest: 'i.u;@0j:/$qkPo,' }, 
  { wallet_key: 'B51C6A2FCBF98A28746159829CDE3', password_digest: 'DJgkPN?2}sIF>v=' }
])


puts "🪙 Seeding Cryptos..."

crypto = Crypto.create([ 
  {name: 'Bitcoin', symbol: 'BTC', price: '6929.82' }, 
  {name: 'Ethereum', symbol: 'ETH', price: '404.98' }, 
  {name: 'Komodo', symbol: 'KMD', price: '1.41' }, 
  {name: 'Tether', symbol: 'USDT', price: '1.00' }, 
  {name: 'Dogecoin', symbol: 'DOGE', price: '0.00' }, 
  {name: 'Nano', symbol: 'NANO', price: '1.55' }, 
  {name: 'Mithril', symbol: 'MITH', price: '0.48' },
  {name: 'TRON', symbol: 'TRX', price: '0.03' }
])


puts "✅ Done seeding!"

# puts "💸 Seeding Walletcryptos..."

# walletcryptos = Walletcrypto.create([
#   { wallet_id: wallets.first.id, crypto_id: cryptos.first.id }, 
#   { wallet_id: wallets.second.id, crypto_id: cryptos.first.id, crypto_id: cryptos.second.id, crypto_id: cryptos.third.id }, 
#   { wallet_id: wallets.third.id, crypto_id: cryptos.first.id, crypto_id: cryptos.last.id }, 
#   { wallet_id: wallets.fourth.id, crypto_id: cryptos.fourth.id }, 
#   { wallet_id: wallets.fifth.id, crypto_id: cryptos.fifth.id },  
#   { wallet_id: wallets.sixth.id, crypto_id: cryptos.sixth.id } 
# ])


# wallets = Wallet.create([
#   { user_id: users.first.id }, 
#   { user_id: users.second.id }, 
#   { user_id: users.third.id }, 
#   { user_id: users.fourth.id }, 
#   { user_id: users.fifth.id },  
#   { user_id: users.last.id } 
# ])
