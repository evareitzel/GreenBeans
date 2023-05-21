Rails.application.routes.draw do
  
  resources :wallets, only: :show
  resources :cryptos, only: :index

  post '/create-account', to: 'wallets#create'

  post '/login', to: 'sessions#create'
  get '/wallet', to: 'wallets#show' # get "/me", to: "users#show"
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
