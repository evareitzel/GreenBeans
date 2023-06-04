class Crypto < ApplicationRecord
  has_many :walletcryptos
  has_many :wallets, through: :walletcryptos

end
