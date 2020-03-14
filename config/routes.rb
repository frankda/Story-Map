Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, :only => [:sing, :create, :index]

  get '/users/login' => 'session#new'
  post '/users/login' => 'session#create'
  delete '/users/login' => 'session#delete'

  root :to => 'pages#home'
end
