class CryptosController < ApplicationController

  def index
    render json: Crypto.all
  end

end
