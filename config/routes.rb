Rails.application.routes.draw do

  namespace :api do
    resources :posts, only: [:index]
    resources :tree_posts, only: [:index], defaults: { format: :json }
  end

  get "/(*all)", to: "front#index"
  root "front#index"
end
