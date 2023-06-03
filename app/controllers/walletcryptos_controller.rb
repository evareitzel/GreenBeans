class WalletcryptosController < ApplicationController

  # POST /walletcryptos
  def create
    # byebug
    walletcrypto = Walletcrypto.create!(walletcrypto_params) # bang method not rendering error message   
    render json: walletcrypto, status: :created # include: :cryptos,
  end

  private

  def walletcrypto_params
    params.permit(:wallet_id, :crypto_id)
  end

end
