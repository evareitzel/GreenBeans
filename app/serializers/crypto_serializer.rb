class CryptoSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :symbol
  has_many :wallets

end
