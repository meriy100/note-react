Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index, :show, :create, :update] do
      resource :state, only: [:update], controller: 'posts/state'
    end
    resources :tree_posts, only: [:index]
    resources :templates, only: [:index]
    resource :playlist, controller: 'playlist', only: [:show, :destroy]
  end

  resources :user_sessions, only: [:new, :create, :destroy]

  get 'login' => 'user_sessions#new', as: :login
  post 'logout' => 'user_sessions#destroy', as: :logout
  get 'logout' => 'user_sessions#destroy'
  get 'play_room', to: 'music_player#index', as: :music_player

  namespace :admin do
    get '/' => 'dashboard#index'
    resources :users, only:[:index, :show, :new, :create, :edit, :update]
  end

  get "/(*all)", to: "front#index"
  root "front#index"
end
