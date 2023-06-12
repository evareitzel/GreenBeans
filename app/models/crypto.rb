class Crypto < ApplicationRecord
  has_many :walletcryptos
  has_many :wallets, through: :walletcryptos

  validates :symbol, presence: true, uniqueness: true, length: { in: 2..5 }, format: { with: /\A[a-zA-Z]+\z/,
    message: "must be letters" }
  validates :name, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z]+\z/,
    message: "must be letters" }
  validates :price, numericality: { greater_than: 0 }
end
