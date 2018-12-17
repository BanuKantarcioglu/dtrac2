class PersonnelSerializer < ActiveModel::Serializer
  attributes :id,:name ,:pno,:jobdescription,:status
  has_many :documents
end
