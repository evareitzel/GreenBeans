class WalletsController < ApplicationController

  # FIX index action so it uses wallet - then delete because poor security practices (multi wallets wouldn't render together irl)

  # Remove Index action (insecure data sharing)
  # GET /wallets
  def index
    render json: Wallet.all, include: :cryptos
  end

  # Not wkg
    # ** write fetch in client!
  # GET /wallets/:id # make /wallet (singular)
  def show
    wallet = Wallet.find_by(wallet_key: session[:key]) # needs work
    if wallet
      render json: wallet, include: :cryptos
    else
      render json: { errors: ['Not authorized'] }, status: :unauthorized
    end
  end

end




#   # GET /wallets/:id # make /wallet (singular)
#   def show
#     wallet = Wallet.find(params[:id])
#     # wallet = Wallet.find(id: session[:wallet_key]) # find_by
#     # if wallet # refactor w rescue_from (in app_controller?)
#       render json: wallet#, include: :cryptos
#     # else
#     #   render json: { errors: ["Not authorized"] }, status: :unauthorized
#     # end
#   end

# end


# # GET /wallets/:id
  # def show
  #   wallet = Wallet.find_by(id: session[:wallet_key])
  #   if wallet # refactor w rescue_from (in app_controller?)
  #     render json: wallet, include: :cryptos
  #   else
  #     render json: { errors: ["Not authorized"] }, status: :unauthorized
  #   end
  # end
