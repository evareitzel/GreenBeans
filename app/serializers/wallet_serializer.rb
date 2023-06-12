class WalletSerializer < ActiveModel::Serializer
  attributes :id, :wallet_key
  has_many :walletcryptos
  has_many :cryptos
end
