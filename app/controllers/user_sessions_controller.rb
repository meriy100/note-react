class UserSessionsController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  def new
    @user = User.new
  end

  def create
    if @user = login(params[:user][:email], params[:user][:password])
      redirect_to(root_path, notice: 'Login successful')
    else
      flash.now[:alert] = 'Login failed'
      @user = User.new()
      render :new
    end
  end

  def destroy
    logout
    redirect_to(login_path, notice: 'Logged out!')
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
