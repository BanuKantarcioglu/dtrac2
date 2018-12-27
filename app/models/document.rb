class Document < ApplicationRecord
  belongs_to :personnel
  belongs_to :document_type

  validates :startdate,:enddate,:istracking, presence: true
  #TODO status value with workflow, startdate < enddate
end
