class AdminController < ApplicationController
  protect_from_forgery with: :exception
  before_action :admin?
  layout "admin"

  private

  def admin?
     raise ActionController::RoutingError.new('here is only admin user page') unless current_user.admin?
  end
end
