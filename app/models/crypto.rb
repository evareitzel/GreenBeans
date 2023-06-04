class Crypto < ApplicationRecord
  has_many :walletcryptos
  has_many :wallets, through: :walletcryptos

  # validates :walletcrypto, uniqueness: true ## NEEDED? WHY?
  validates :wallet, uniqueness: true ## ? WKG OR NOT? (possibly)
end
