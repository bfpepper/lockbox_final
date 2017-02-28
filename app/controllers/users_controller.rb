class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save && params[:user][:password] == params[:user][:password_confirmation]
      session[:user_id] = user.id
      redirect_to :root
    else
      redirect_to :signup
    end
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
