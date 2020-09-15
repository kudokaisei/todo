Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users, only: [:edit, :update, :show]
  resources :groups do
    resources :tasks
  end
end