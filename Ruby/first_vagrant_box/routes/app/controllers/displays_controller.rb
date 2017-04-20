class DisplaysController < ApplicationController
  # routes are underneath each function in the controller
  def index
    # root "displays#index"
    render text: "What do you the dragon to say?"
  end

  def hello
    # get "hello" => "displays#hello"
    render text: "Welcome to my lair!"
  end

  def say
    # get "say/hello(/:name)" => "displays#say"
    unless params[:name]
      render text: "Saying hail and well met!"
    else
      if params[:name] == "michael"
        redirect_to "/stupid"
      else
        render text: "Saying hail and well met #{params[:name]}!"
      end
    end
  end

  def stupid
    render text: "I cannot believe you're so stupid!"
  end

  def times
    # get "times" => "displays#times"
    session[:count] ||= 0
    render text: "You have visited this url #{session[:count] += 1} time(s)"
  end

  def restart
    # get "times/restart" => "displays#restart"
    reset_session
    render text: "Destroyed Session"
  end
end
