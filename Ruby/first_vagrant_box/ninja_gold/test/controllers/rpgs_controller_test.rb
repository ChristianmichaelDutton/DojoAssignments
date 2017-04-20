require 'test_helper'

class RpgsControllerTest < ActionController::TestCase
  test "should get main" do
    get :main
    assert_response :success
  end

  test "should get dungeon" do
    get :dungeon
    assert_response :success
  end

  test "should get wilderness" do
    get :wilderness
    assert_response :success
  end

  test "should get guild" do
    get :guild
    assert_response :success
  end

  test "should get tavern" do
    get :tavern
    assert_response :success
  end

end
