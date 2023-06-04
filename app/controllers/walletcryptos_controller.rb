class WalletcryptosController < ApplicationController
  skip_before_action :authorize, only: :create # DEV tool for Postman

  # POST /walletcryptos
  def create
    # byebug
    walletcrypto = Walletcrypto.create!(walletcrypto_params) # not rendering errors  
    render json: walletcrypto.to_json(only: [:id, :wallet_id, :crypto_id, :quantity, :total]), status: :created
  end

  # PATCH '/walletcryptos/:id'
  def update
    walletcrypto = find_walletcrypto
    walletcrypto.update!(walletcrypto_params)
    render json: walletcrypto
  end

  private

  def walletcrypto_params
    params.permit(:wallet_id, :crypto_id, :quantity)
  end

  def find_walletcrypto
    Walletcrypto.find(params[:id])
  end

end
