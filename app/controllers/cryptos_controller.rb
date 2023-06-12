class CryptosController < ApplicationController

  # GET /cryptos
  def index
    render json: Crypto.all
  end

  # POST /cryptos
  def create
    crypto = Crypto.create!(crypto_params)
    render json: crypto, status: :created
  end

  private

  def crypto_params
    params.permit(:symbol, :name, :price)
  end

end
