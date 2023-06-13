class WalletcryptoSerializer < ActiveModel::Serializer
  attributes :id, :wallet_id, :crypto_id, :quantity, :total, :crypto

end
