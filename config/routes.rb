Rails.application.routes.draw do
  get 'pages/landing'
  get 'pages/about_us'
  get 'pages/contact_us'
  get 'pages/partners'
  get 'pages/events'
  get 'pages/sign_up'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#landing"
end
