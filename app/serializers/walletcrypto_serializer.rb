class WalletcryptoSerializer < ActiveModel::Serializer
  attributes :id, :wallet_id, :quantity, :total, :crypto
end
