class WalletcryptosController < ApplicationController

  # POST /walletcryptos
  def create
    # byebug
    walletcrypto = Walletcrypto.create!(walletcrypto_params) # bang method not rendering errors  
    render json: walletcrypto, status: :created
  end

  # PATCH /walletcryptos/:id
  def update
    # byebug
    walletcrypto = Walletcrypto.find(params[:id])
    walletcrypto.update!(walletcrypto_params)
    render json: walletcrypto
  end


  private

  def walletcrypto_params
    params.permit(:wallet_id, :crypto_id, :quantity)
  end

end
