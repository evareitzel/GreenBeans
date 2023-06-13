class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create
  
  # POST /login
  def create
    wallet = Wallet.find_by(wallet_key: params[:wallet_key])
    if wallet&.authenticate(params[:password])
      session[:wallet_key] = wallet.wallet_key # get wristband
      render json: wallet
    else
      render json: { errors: ['Invalid wallet key or password'] }, status: :unauthorized
    end
  end

  # DELETE /logout
  def destroy
    session.delete :wallet_key
    head :no_content
  end

end
