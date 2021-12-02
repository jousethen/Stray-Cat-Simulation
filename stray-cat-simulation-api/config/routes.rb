Rails.application.routes.draw do
  namespace :api do
    resources :accessories
    get '/cats' => 'cats#index'
    patch '/cats/:id' => 'cats#update'
    post '/cats/overnight-adventures' => 'cats#overnight'

    get '/user' => 'users#show'
    post '/user' => 'users#carry_over'

    get '/accessories' => 'accessories#index'
    patch '/accessories/:id' => 'accessories#update'
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end 
end
