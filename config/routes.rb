Rails.application.routes.draw do
  devise_for :users
  resources :days, except: [:update, :destroy]
  resources :things, except: [:update, :destroy]
  root 'landing#index'
end
