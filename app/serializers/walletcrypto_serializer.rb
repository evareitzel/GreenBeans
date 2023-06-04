class WalletcryptoSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :total
  has_one :wallet
  has_one :crypto
end
