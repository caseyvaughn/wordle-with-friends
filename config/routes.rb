Rails.application.routes.draw do
  resources :users
  
  resources :words do
    resources :ratings

  resources :games
  end

  #custom route to get user's words
  get '/users/:user_id/words', to: 'words#get_user_words'

  #authentications routes 
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
