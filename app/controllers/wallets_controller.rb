class WalletsController < ApplicationController
  skip_before_action :authorize, only: :create

  # POST '/create-account'
  def create
    wallet = Wallet.create!(wallet_params)
    session[:wallet_key] = wallet.wallet_key # walletKey
    render json: wallet, status: :created
  end

  # GET /wallet
  def show
    render json: @current_wallet, include: :cryptos
  end

  private

  def wallet_params
    params.permit(:walletKey, :password, :password_confirmation) # :wallet_key
  end

end


# write model validations (key & pw - present; pw === pw_conf, length(key), greater_than/less_than - pw)


# FIX index action so it uses wallet - then delete because poor security practices (multi wallets wouldn't render together irl)

# Remove Index action (insecure data sharing)
# # GET /wallets
# def index
#   render json: Wallet.all, include: :cryptos
# end

# # GET /wallet
# def show
#   # wallet = Wallet.find_by(wallet_key: session[:wallet_key]) # ?
#   # render json: wallet, include: :cryptos
#   render json: @current_wallet, include: :cryptos #
# end
# render json: { errors: ['Not authorized'] }, status: :unauthorized
