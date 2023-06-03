class CryptosController < ApplicationController

  # GET /cryptos
  def index
    render json: Crypto.all
  end

  # PATCH /cryptos/:id
  def update
    crypto = Crypto.find(params[:id]) # id:
    crypto.update(crypto_params) # update!
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
