Rails.application.routes.draw do
  # namespacing from https://github.com/evareitzel/phase-4-deploying-rails-react-to-render

  namespace :api do   
    post '/create-account', to: 'wallets#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    get '/wallet', to: 'wallets#show'
    resources :cryptos, only: [:index, :create]
    resources :walletcryptos, only: [:index, :create, :update, :destroy]
  end
  
  # live code challenge 6/20/2023
  # get "/wallet_walletcryptos/:n", to: "wallets#wallet_walletcryptos"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
