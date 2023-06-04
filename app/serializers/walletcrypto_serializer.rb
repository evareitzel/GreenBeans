class WalletcryptoSerializer < ActiveModel::Serializer
  attributes :id, :crypto_id, :quantity, :total, :wallet_id, :crypto
  # has_one :crypto
end
