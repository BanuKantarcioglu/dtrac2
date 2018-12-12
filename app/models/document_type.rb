class DocumentType < ApplicationRecord
  has_many :documents
  has_many :personnel, through: :documents

  validates :description, uniqueness: true,presence: true
  validates :active, presence: true
  #TODO create unique index


end
