class DocumentType < ApplicationRecord
  validates :description, uniqueness: true,presence: true
  validates :active, presence: true
  #TODO create unique index
end
