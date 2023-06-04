class CryptoSerializer < ActiveModel::Serializer
  attributes :id, :name, :symbol, :price# :walletcryptos
  # has_many :walletcryptos
  has_many :wallets

end
