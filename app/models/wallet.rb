class Wallet < ApplicationRecord

  has_many :walletcryptos
  has_many :cryptos, through: :walletcryptos
  # has_secure_password # bcrypt gem
  
  # validates wallet_key, presence: true, is_unique
end
