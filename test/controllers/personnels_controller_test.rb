require 'test_helper'

class PersonnelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
      get personnels_url
      assert_response :success
  end
  #TODO how to define difference of these two cases
  test "should get only all" do
    get personnels_url , params: { personnel: { showinactive: false}}
    assert_response :success
  end

  test "should create personnel" do
    assert_difference('Personnel.count') do
      post personnels_url, params: { personnel: { name: 'No name', pno: '000', jobdescription: "lazy cat" } }
    end
    assert_response :success
  end

  test "should not create personnel" do
    post personnels_url, params: { personnel: { name: '', pno: '000', jobdescription: "lazy cat" } }
    assert_response :unprocessable_entity
  end

end
