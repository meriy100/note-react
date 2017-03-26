class Api::Posts::StateController < ApplicationController
  def update
    find_post.update!(state: state_params)
    render json: find_post
  end

  private

  def find_post
    @post ||= Post.pub.find(params[:post_id])
  end

  def state_params
    params.require(:state)
  end
end
