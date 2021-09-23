Rails.application.routes.draw do
  resources :accessories
  get '/cats' => 'cats#index'
  patch '/cats/:id' => 'cats#update'
  post '/cats/overnight-adventures' => 'cats#overnight'

  get '/user' => 'users#show'
  post '/user' => 'users#carry_over'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end 
