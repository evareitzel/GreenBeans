class Walletcrypto < ApplicationRecord
  belongs_to :wallet
  belongs_to :crypto

  # validates :crypto_id, uniqueness: true
  validates :quantity, numericality: { greater_than_or_equal_to: 1 }

end
