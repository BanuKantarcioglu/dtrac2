class Document < ApplicationRecord
  belongs_to :personnel
  belongs_to :document_type

  validates :startdate,:enddate, presence: true
  #TODO startdate < enddate
  #TODO istracking = false  rails counts it empty, so presence check is failing
end
