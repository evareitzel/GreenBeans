class WalletsController < ApplicationController
  skip_before_action :authorize, only: :create

  # write model validations (key & pw - present; pw === pw_conf, length(key), greater_than/less_than - pw)

  # POST '/create-account'
  def create
    wallet = Wallet.create!(wallet_params)
    session[:wallet_key] = wallet.wallet_key
    # change to session[:key] ?!
    render json: wallet, status: created
  end

  # FIX index action so it uses wallet - then delete because poor security practices (multi wallets wouldn't render together irl)

  # Remove Index action (insecure data sharing)
  # # GET /wallets
  # def index
  #   render json: Wallet.all, include: :cryptos
  # end

  # GET /wallet
  def show
    wallet = Wallet.find_by(wallet_key: session[:wallet_key]) # ?
    render json: wallet, include: :cryptos
    # @current_wallet
  end
  # render json: { errors: ['Not authorized'] }, status: :unauthorized

  private

  def wallet_params
    params.permit(:wallet_key, :password, :password_confirmation)
  end
end
