Rails.application.routes.draw do
    resources :document_types,only: [:index,:show] ,defaults: { format: :json }
end
