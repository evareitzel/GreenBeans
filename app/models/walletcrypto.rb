class Walletcrypto < ApplicationRecord
  belongs_to :wallet
  belongs_to :crypto
  validates :crypto, uniqueness: true, presence: true # , numericality: { greater_than_or_equal_to: 1 }

  # validates :quantity, numericality: { greater_than_or_equal_to: 1 }
end
