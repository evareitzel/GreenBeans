class WalletcryptoSerializer < ActiveModel::Serializer
  attributes :id, :crypto_id, :quantity, :total, :wallet_id, :crypto
  # has_one :crypto

  #  validations:  uniqueness :crypto_id within Wallet scope

  # validates :crypto_id, uniqueness: { scope: :wallet} # check
end
