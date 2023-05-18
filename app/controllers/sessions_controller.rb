class SessionsController < ApplicationController

  # FIX ********************
  # POST /login
  def create
    wallet = Wallet.find_by(wallet_key: params[:wallet_key])
    session[:key] = wallet.wallet_key # fix syntax / names
    # 2/2 - get wristband (session[:key])
    # :wallet_key # error: NoMethodError (undefined method wallet_key)
    render json: wallet
  end

  # DELETE /logout
  def destroy
    session.delete :key
    head :no_content
  end

  # private
  # wallet_params - params.permit()
end
