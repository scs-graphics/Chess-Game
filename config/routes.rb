# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root "static_page#index"
  resources :games, only: [:create, :new, :update, :show]

  resources :users, only: :show

end
