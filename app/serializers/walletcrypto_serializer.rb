class WalletcryptoSerializer < ActiveModel::Serializer
  attributes :id
  has_one :wallet
  has_one :crypto
end
