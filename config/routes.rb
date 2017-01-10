Rails.application.routes.draw do

  namespace :api do
    resources :posts, only: [:index]
  end
  get "/(*all)", to: "front#index"
  root "front#index"
end
