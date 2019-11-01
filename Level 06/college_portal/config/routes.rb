Rails.application.routes.draw do
	root to:"static_pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :departments,only: [:index, :create, :new]
  resources :sections,only: [:index, :create, :new]
  resources :students,only: [:index, :create, :new, :show]

end
