class WalletcryptoSerializer < ActiveModel::Serializer
  attributes :id # , :cryptos # added c

  has_one :wallet
  has_one :crypto
end
