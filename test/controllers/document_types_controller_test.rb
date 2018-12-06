require 'test_helper'

class DocumentTypesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
      get document_types_url
      assert_response :success
    end

  test "should get show" do
    get document_type_url(1)
    assert_response :success
  end
end
