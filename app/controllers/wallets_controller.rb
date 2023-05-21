class WalletsController < ApplicationController
  skip_before_action :authorize, only: :create

  # POST /create-account
  def create
    wallet = Wallet.create!(wallet_params)
    session[:wallet_key] = wallet.wallet_key
    render json: wallet, status: :created
  end

  # GET /wallet
  def show
    render json: @current_wallet, include: :cryptos
  end

  private

  def wallet_params
    params.permit(:wallet_key, :password)
    # :password_confirmation
  end

end