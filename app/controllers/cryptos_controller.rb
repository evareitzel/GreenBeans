class CryptosController < ApplicationController

  # GET /cryptos
  def index
    render json: Crypto.all
  end

  # PATCH /cryptos/:id
  def update
    crypto = Crypto.find(id: params[:id])
    crypto.update(crypto_params)
    render json: crypto
  end

  # GET /walletcrypto/:id/cryptos # cryptos plural?
  # def index
  #   crypto = Crypto.find_by()
  # end


  private

  def crypto_params
    params.permit(:quanitity)
  end

end
