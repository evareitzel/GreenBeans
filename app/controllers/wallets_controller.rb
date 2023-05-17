class WalletsController < ApplicationController

  # GET /wallets #
  def index
    render json: Wallet.all
  end

  # GET /wallet
  def show
    wallet = Wallet.find_by(id: session[:wallet_key])
    if wallet # refactor w rescue_from (in app_controller?)
      render json: wallet, include: :cryptos
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

end
