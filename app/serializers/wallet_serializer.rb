class WalletSerializer < ActiveModel::Serializer
  attributes :id, :wallet_key, :password_digest, :cryptos
end
