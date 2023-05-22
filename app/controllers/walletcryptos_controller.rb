class WalletcryptosController < ApplicationController

  # POST /add-crypto
  def create
    walletcrypto = Walletcrypto.create(walletcrypto_params)
  end

  private
  def wallet_crypto_params
    params.permit(:wallet_id, :crypto_id)
  end

end
