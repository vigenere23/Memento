Rails.application.routes.draw do
  # get '/notes', to: 'notes#index'
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	get '/notes', to: 'notes#index'
	post '/notes', to: 'notes#create'
	root to: 'home#index'
end
