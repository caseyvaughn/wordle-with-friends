Rails.application.routes.draw do
  resources :games
  resources :ratings
  resources :words
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
