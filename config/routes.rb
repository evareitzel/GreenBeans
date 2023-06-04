Rails.application.routes.draw do
  post '/create-account', to: 'wallets#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/wallet', to: 'wallets#show'
  resources :cryptos, only: [:index]
  resources :walletcryptos, only: [:create, :update, :destroy] # READ

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
