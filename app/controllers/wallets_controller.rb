class WalletsController < ApplicationController
  skip_before_action :authorize, only: [:create, :wallet_walletcryptos]

  # POST /create-account
  def create
    wallet = Wallet.create!(wallet_params)
    session[:wallet_key] = wallet.wallet_key
    render json: wallet, status: :created
  end

  # GET /wallet
  def show
    render json: @current_wallet
  end

  # live code challenge 6/20/2023
  # GET "wallet_walletcryptos"
  # def wallet_walletcryptos
  #   # walletcryptos = wallet.all#.select { |w| w[:walletcryptos][:quantity] >= params[:n] }
  #   wallets = Wallet.all
  #   # wallets.where("walletcrypto.length > ?", params[:n])

    # filtered = wallets.select { |w| w.walletcryptos.length >= params[:n].to_i }
    # byebug

  #   render json: filtered

  # end

  private

  def wallet_params
    params.permit(:wallet_key, :password)
  end

end