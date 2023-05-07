class SessionsController < ApplicationController

  # POST /login
  def create
    wallet = Wallet.find_by(wallet_key: params[:wallet_key])
    session[:wallet_key] = wallet.wallet_key # ?
    # session[:user_id] = user.id
    render json: wallet
  end

  def destroy
    session.delete :wallet_key
    head :no_content
  end

  # private
  # wallet_params - params.permit()
end
