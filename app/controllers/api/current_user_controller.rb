class Api::CurrentUserController < ApplicationController
  def show
    render json: current_user
  end
end
