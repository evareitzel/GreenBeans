Rails.application.routes.draw do
  post '/create-account', to: 'wallets#create'
  get '/wallet', to: 'wallets#show', include: :cryptos #, include: :walletcryptos 
  # get "/me", to: "users#show"
  
  resources :cryptos, only: [:index, :update]
  resources :walletcryptos, only: :create #, include: :cryptos
  # post 'add-crypto', to: 'walletcryptos#create' #

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  


  # resources :wallets do
    resources :walletcryptos do
      resources :cryptos #, only: [:index]
    end
  # end 

  resources :cryptos do
    resources :walletcryptos, only: [:create, :update]
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
