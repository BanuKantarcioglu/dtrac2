class DocumentSerializer < ActiveModel::Serializer
  attributes :id,:document_type,:startdate,:enddate,:status,:personnel_id
end
