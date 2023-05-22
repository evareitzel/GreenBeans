class Wallet < ApplicationRecord
  has_many :walletcryptos, dependent: :destroy #
  has_many :cryptos, through: :walletcryptos
  has_secure_password # bcrypt gem
  # 
  # erroring out when input meets validations
  
  validates :wallet_key, presence: true, uniqueness: true, length: { is: 5 }   
  # validates :wallet_key, presence: true 

  # validates :password_digest, uniqueness: true, length: { in: 8..12 } 
  validates :password_digest, presence: true 

end
