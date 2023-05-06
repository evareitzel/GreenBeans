class SessionsController < ApplicationController

  def create
    wallet = Wallet.find_by(wallet_key: params[:wallet_key])
    session[:wallet_key] = wallet.wallet_key
    render json: wallet
  end

end
