class Document < ApplicationRecord
  belongs_to :personnel
  belongs_to :document_type
end
