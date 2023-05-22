class Wallet < ApplicationRecord
  has_many :walletcryptos, dependent: :destroy #
  has_many :cryptos, through: :walletcryptos
  has_secure_password # bcrypt gem
  # 
  # erroring out when input meets validations
  
  validates :wallet_key, presence: true, uniqueness: true, length: { is: 5 } # Wallet key is the wrong length (should be 5 characters)  

  # validates :password_digest, presence: true, uniqueness: true, length: { in: 8..12 }  # Password digest is too long (maximum is 12 characters) - ?????? is this the bcrypt gem?

end
