# class WalletSerializer < ActiveModel::Serializer
#   attributes :id, :wallet_key, # :walletcryptos # 
#   has_many :wallet_cryptos
# end

class WalletSerializer < ActiveModel::Serializer
  attributes :id, :wallet_key
  has_many :cryptos # is this needed?
  has_many :walletcryptos
end
