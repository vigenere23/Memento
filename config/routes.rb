Rails.application.routes.draw do
  # get '/notes', to: 'notes#index'
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :notes # contains all the CRUD routes
	root to: 'home#index'
end
