require 'test_helper'

class PersonnelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
      get personnels_url
      assert_response :success
      assert_equal "application/json", response.content_type

  end
  #TODO how to define difference of these two cases
  test "should get only all" do
    get personnels_url , params: { personnel: { showinactive: false}}
    assert_response :success
    assert_equal "application/json", response.content_type
  end

  test "should create personnel" do
    assert_difference('Personnel.count') do
      post personnels_url, params: { personnel: { name: 'No name', pno: '000', jobdescription: "lazy cat" } }
    end
    json = JSON.parse(response.body)
    assert_not_nil json
    #post_json = json["posts"].first
    assert_response :success
    assert_equal "application/json", response.content_type
  end

  test "should not create personnel" do
    post personnels_url, params: { personnel: { name: '', pno: '000', jobdescription: "lazy cat" } }
    assert_response :unprocessable_entity
    assert_equal "application/json", response.content_type
  end

  test "should update personnel" do
    #post personnels_url, params: { personnel: { name: 'No name', pno: '000', jobdescription: "lazy cat" } }
    @p =  Personnel.first #TODO why this is not working?
    patch '/personnels/' + @p.id.to_s, params: { personnel: {id:@p.id,name: 'No name', pno: '000', jobdescription: "lazy cat" } }
    json = JSON.parse(response.body)
    responseid = json["id"].first

    assert_response :success
    assert_equal "application/json", response.content_type
    assert_equal responseid,@p.id
  end
end
