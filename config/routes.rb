Rails.application.routes.draw do
  resources :posts, except: [:new, :edit]
  mount_devise_token_auth_for 'User', at: 'auth'

  root to: 'application#angular'
  
end
