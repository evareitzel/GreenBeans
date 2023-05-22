class Wallet < ApplicationRecord
  has_many :walletcryptos, dependent: :destroy #
  has_many :cryptos, through: :walletcryptos
  has_secure_password # bcrypt gem

  # after initialize :init # 
  
  validates :wallet_key, presence: true, uniqueness: true, length: { is: 5 }

  # validates :password

  # FIX
  # def init
  #   self.cryptos ||= []
  # end

end
