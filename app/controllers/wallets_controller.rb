class WalletsController < ApplicationController

  # FIX index action so it uses wallet - then delete because poor security practices (multi wallets wouldn't render together irl)

  # Remove Index action (insecure data sharing)
  # # GET /wallets
  # def index
  #   render json: Wallet.all, include: :cryptos
  # end

  # GET /wallet
  def show
    wallet = Wallet.find_by(wallet_key: session[:wallet]) # ?
    render json: wallet, include: :cryptos
    # @current_wallet
  end
  # render json: { errors: ['Not authorized'] }, status: :unauthorized

end
