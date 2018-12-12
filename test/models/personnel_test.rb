require 'test_helper'

class PersonnelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end


  #  validates :name, presence: true, uniqueness: true
  #  validates :pno, numericality:  {only_integer: true}, allow_blank: true
  #  validates :jobdescription, length: {in:3..100}, allow_blank: true

  test "personnel should have name" do
    personnel = Personnel.new
    assert_not personnel.save, " saved empty personnel "
  end

  test "personnel name should be unique " do
    p1 = personnels(:dummy)
    p1.save
    p2 = Personnel.new
    p2.name = p1.name
    assert_not p2.save, "saved personnel with same name"
  end

  test "pno should be only_integer" do
    #p = Personnel.new
    p = personnels(:dummy)
    p.pno = "abc"
    assert_not p.save, "saved pno in string"
    p.pno = 1.2
    assert_not p.save, "saved pno in double"
    #p.pno = -1
    #assert_not p.save, "saved pno in negative"
  end

  test "jobdescription should be at least 3 max 100 chars" do
    #p = Personnel.new
    p = personnels(:dummy)
    p.jobdescription ="a"
    assert_not p.save, "saved jobdescription 1 chars"
    p.jobdescription ="a" * 101
    assert_not p.save, "saved jobdescription 101 chars"
    p.jobdescription ="abcd"
    assert p.save, "saved jobdescription 4 chars"
  end



end
