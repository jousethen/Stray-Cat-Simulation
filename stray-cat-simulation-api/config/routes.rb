Rails.application.routes.draw do
  get '/cats' => 'cats#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
