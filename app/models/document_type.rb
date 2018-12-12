class DocumentType < ApplicationRecord
  has_many :documents
  validates :description, uniqueness: true,presence: true
  validates :active, presence: true
  #TODO create unique index

end
