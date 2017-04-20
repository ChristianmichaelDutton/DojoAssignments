Rails.application.routes.draw do
  get "users" => "users#index"
  get "users/new" => "users#new"
  post "users" => "users#create"
  get "users/:id" => "users#show"
  get "users/:id/edit" => "users#edit"
  patch "users/:id" => "users#update"
  get "total" => "users#total"
  get "millennium" => "users#millennium"

end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'users/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: user.id)
  #   get 'users/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :users

  # Example resource route with options:
  #   resources :users do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :users do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :users do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/users/* to Admin::ProductsController
  #     # (app/controllers/admin/users_controller.rb)
  #     resources :users
  #   end