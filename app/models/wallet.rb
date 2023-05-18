class Wallet < ApplicationRecord
  has_many :walletcryptos # dependent: :destroy
  has_many :cryptos, through: :walletcryptos
  # has_secure_password # bcrypt gem
  
  # validates wallet_key, presence: true, is_unique

  # write model validations (key & pw - present; pw === pw_conf, length(key), greater_than/less_than - pw)

end
