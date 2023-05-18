class CryptosController < ApplicationController

  # GET /cryptos
  def index
    render json: Crypto.all
  end

end
