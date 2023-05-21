class Wallet < ApplicationRecord
  has_many :walletcryptos, dependent: :destroy #
  has_many :cryptos, through: :walletcryptos
  has_secure_password # bcrypt gem
  
  validates :wallet_key, uniqueness: true, length: { is: 29 } # presence: true

  validates :password_digest, uniqueness: true, length: { in: 12..20 } # presence: true

end
