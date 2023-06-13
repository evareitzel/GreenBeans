class WalletcryptosController < ApplicationController

  # GET /walletcryptos
  def index
    walletcryptos = Walletcrypto.all
    render json: walletcryptos
  end

  # POST /walletcryptos
  def create
    walletcrypto = Walletcrypto.create!(walletcrypto_params)
    render json: walletcrypto.to_json(only: [:id, :wallet_id, :crypto_id, :quantity, :total], include: :crypto), status: :created
  end

  # PATCH /walletcryptos/:id
  def update
    walletcrypto = find_walletcrypto
    walletcrypto.update!(walletcrypto_params)
    render json: walletcrypto
  end

  # DELETE /walletcryptos/:id
  def destroy
    walletcrypto = find_walletcrypto
    walletcrypto.destroy
    head :no_content
  end

  private

  def walletcrypto_params
    params.permit(:wallet_id, :crypto_id, :quantity, :total)
  end

  def find_walletcrypto
    Walletcrypto.find(params[:id])
  end

end
