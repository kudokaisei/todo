Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users, only: [:edit, :update, :show]
  resources :groups, only: [:index, :new, :create, :edit, :update]
  resources :tasks
end