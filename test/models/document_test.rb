require 'test_helper'

class DocumentTest < ActiveSupport::TestCase
  test "document should not be empty" do
    d = Document.new
    assert_not d.save, "document saved without any value"
  end

  test "document should not be just references" do
    d = Document.new
    d.personnel = personnels(:dummy)
    d.document_type =document_types(:one)
    assert_not d.save, "document saved with just references"
  end

  test "document start date should not be empty" do
    d = Document.new
    d.personnel = personnels(:dummy)
    d.document_type =document_types(:one)
    d.enddate = Date.today
    d.status = 1
    assert_not d.save, "document saved without startdate"
  end

  test "document end date should not be empty" do
    d = Document.new
    d.personnel = personnels(:dummy)
    d.document_type =document_types(:one)
    d.startdate = Date.today
    d.status = 1
    assert_not d.save, "document saved without startdate"
  end

  test "document saved" do
    d = Document.new
    d.personnel = personnels(:dummy)
    d.document_type =document_types(:one)
    d.startdate = Date.today
    d.enddate = Date.tomorrow
    d.status = 1
    assert d.save, "document can't saved with correct values"
  end
end
