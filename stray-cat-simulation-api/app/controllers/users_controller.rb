class UsersController < ApplicationController
  def show
    user = User.first
    render json: user
  end

  def carry_over
    user = User.first;
    user.actions = params[:actions] + 5;
    user.save;
  end

   private 
  def user_params
    params.require(:user).permit(:id, :actions)
  end
end
