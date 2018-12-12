Rails.application.routes.draw do
    #TODO DRY
    resources :document_types,only: [:index,:show] ,defaults: { format: :json }
    #TODO nested resources for personnel and their documents
    resources :personnels, only: [:index],defaults: { format: :json }
    resources :documents, only: [:index],defaults: { format: :json }

end
