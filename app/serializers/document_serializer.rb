class DocumentSerializer < ActiveModel::Serializer
  attributes :id,:document_type,:startdate,:enddate,:istracking,:personnel_id
end
