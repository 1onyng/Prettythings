Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts
    # resources :follows
    resources :likes, only: [:create, :destroy, :show]
    # resources :comments
  end
end
