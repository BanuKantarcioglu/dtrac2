# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do |n|
  name  = Faker::Name.name
  pno = Faker::Number.number(5)
  jobdescription = Faker::Job.title
  status = Faker::Boolean.boolean(0.8)
  p = Personnel.create!(name:  name,
               pno:   pno ,
               jobdescription: jobdescription,
               status: status)
  numofdocuments = Faker::Number.between(1,4)
  numofdocuments.times do |k|
    d = Document.new
    d.personnel = p
    d.document_type = DocumentType.find(Faker::Number.between(1,4))
    #dname = documenttype[Faker::Number.between(1,4)]
    startdate = Faker::Date.between(1.years.ago,Date.today)
    d.startdate = startdate
    d.enddate = Faker::Date.between(startdate,startdate + 365.days)
    d.status = 1
    d.save!
  end

end
