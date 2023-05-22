class WalletcryptosController < ApplicationController

  # POST /walletcryptos
  def create
    byebug
    walletcrypto = Walletcrypto.create!(walletcrypto_params)
    render json: walletcrypto, status: :created 
  end

  private
  def walletcrypto_params
    params.permit(:wallet_id, :crypto_id)
  end

end
