# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root "static_page#index"

  get 'team', to: 'static_page#team'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :games, only: [:create, :new, :update, :show]

  resources :users, only: :show


end
