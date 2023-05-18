Rails.application.routes.draw do
  
  resources :walletcryptos, only: :index
  resources :cryptos, only: :index
  resources :wallets, only: [:index, :show]

  post '/login', to: 'sessions#create'
  get '/wallet', to: 'wallets#show' # get "/me", to: "users#show"
  post '/create-account', to: 'wallets#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
