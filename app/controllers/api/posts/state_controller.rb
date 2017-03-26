class Api::Posts::StateController < ApplicationController
  def update
    find_post.update!(state: state_params)
  end

  private

  def find_post
    @post ||= Post.public.find(params[:id])
  end

  def state_params
    params.require(:state)
  end
end
