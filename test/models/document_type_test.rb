require 'test_helper'

class DocumentTypeTest < ActiveSupport::TestCase
  test "should not save without description" do
    @dt = DocumentType.new
    assert_not @dt.save, "saved document type without description"
  end

  test "creates default value with the model " do
    @dt = DocumentType.new
    assert_equal true, @dt.active , "default at model"
  end

  test "should default active to true " do
    @dt = DocumentType.new
    @dt.description = "abc"
    @dt.save
    assert_equal true, @dt.active , "saved document type without active"
  end
end
