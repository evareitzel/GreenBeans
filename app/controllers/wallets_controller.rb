class WalletsController < ApplicationController

  # GET /wallets ##
  def index
    render json: Wallet.all
  end

end
