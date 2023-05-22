class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create
  
  # POST /login
  def create
    wallet = Wallet.find_by(wallet_key: params[:wallet_key]) # ? wallet_key/walletKey
    if wallet # &.authenticate(params[:password]) # ?  password/password_digest
    #### CANNOT LOG IN WHEN .authenticate is called
      session[:wallet_key] = wallet.wallet_key # 2/2 - get wristband # WKG?
      render json: wallet
    else
      render json: { errors: ['Invalid username or password'] }, status: :unauthorized
    end
  end

  # DELETE /logout
  def destroy
    session.delete :wallet_key
    head :no_content
  end

end
