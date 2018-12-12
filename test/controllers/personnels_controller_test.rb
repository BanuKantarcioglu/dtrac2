require 'test_helper'

class PersonnelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
      get personnels_url
      assert_response :success
  end


end
