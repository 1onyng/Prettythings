Rails.application.routes.draw do
  resources :follows
  resources :likes
  resources :comments
  resources :posts
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
