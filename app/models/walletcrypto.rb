class Walletcrypto < ApplicationRecord
  belongs_to :wallet
  belongs_to :crypto
  after initialize :init # 

  def init
    self.crypto.quantity ||= 1
  end


end
