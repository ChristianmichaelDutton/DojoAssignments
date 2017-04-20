class RpgsController < ApplicationController

  def main
    session[:gold] ||= 0
    @gold = session[:gold]
    session[:adventure] ||= []
    @adventure = session[:adventure]

  end
  def new
    if params[:building] == 'dungeon'
      # params[:building] is the hidden input line
      gold = rand(1..8)+6
    elsif params[:building] == 'wilderness'
      gold = rand(1..20)
    elsif params[:building] == 'guild'
      gold = rand(1..4)+1
    else
      gold = rand(-50..50)
    end
    current_time = Time.now

    if gold > 0
      session[:adventure] << "Earned #{gold} gp from the #{params[:building]}! (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
    else
      session[:adventure] << "Entered a tavern and lost #{gold} gp... Ouch. (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
    end
    session[:gold] += gold.to_i
    redirect_to :root
  end



end
