Rails.application.routes.draw do

  namespace :api do
    resources :posts, only: [:index, :show, :update], defaults: { format: :json }
    resources :tree_posts, only: [:index], defaults: { format: :json }
  end

  resources :user_sessions, only: [:new, :create, :destroy]

  get 'login' => 'user_sessions#new', as: :login
  post 'logout' => 'user_sessions#destroy', as: :logout
  get 'logout' => 'user_sessions#destroy'

  namespace :admin do
    get '/' => 'dashboard#index'
    resources :users, only:[:index, :new, :create]   
  end

  get "/(*all)", to: "front#index"
  root "front#index"
end
