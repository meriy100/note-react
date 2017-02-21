class Admin::SessionsController < AdminController

  def new
    @user = User.new 
  end

  def create
    @user = login(params[:email], params[:password]) 
    if @user.admin == true
      redirect_to(admin_url, notice: 'login succeed')
    else
      flash.now[:warning] = 'login failed'
      render :new
    end
  end

  def destroy
    logout
    redirect_to(root_url, notice: 'logout')
  end
end
