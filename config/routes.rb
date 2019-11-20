Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:create, :show, :index, :update, :destroy] do
      resources :follows, only: [:index]
    end
    
    resources :posts do
      resources :comments, only: [:index]
    end

    resources :follows, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :destroy, :show]
    resource :session, only: [:create, :destroy]

    get 'profile/posts/:id', :to => 'posts#profile_posts'
  end
end
