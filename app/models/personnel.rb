class Personnel < ApplicationRecord
  has_many :documents
  has_many :document_types, through: :documents

  validates :name, presence: true , uniqueness: true
  validates :pno, numericality:  {only_integer: true}, allow_blank: true #TODO allow only positive
  validates :jobdescription, length: {in:3..100}, allow_blank: true
end
