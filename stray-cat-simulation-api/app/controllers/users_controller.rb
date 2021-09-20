class UsersController < ApplicationController
  def show
    user = User.first
    render json: user
  end
end
