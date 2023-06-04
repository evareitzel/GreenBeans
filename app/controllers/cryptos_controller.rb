class CryptosController < ApplicationController

  # skip_before_action :authorize, only: :index

  # GET /cryptos
  def index
    render json: Crypto.all
  end

end
