class Personnel < ApplicationRecord
  has_many :documents
  has_many :document_types, through: :documents
end
