class Admin::UsersController < AdminController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(new_user_params)
    if @user.save
      redirect_to admin_users_url, notice: "user created"
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @user.update(update_user_params)
      redirect_to admin_users_path
    else
      render :edit
    end
  end

  private

  def new_user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :admin)
  end

  def update_user_params
    params.require(:user).permit(:name, :email, :admin)
  end

  def set_user
    @user = User.find(params[:id])
  end
end

