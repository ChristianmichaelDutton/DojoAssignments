class TimeController < ApplicationController
  def main
    @time = Time.new
  end
end
