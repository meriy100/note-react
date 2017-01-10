class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts.to_json
  end
end
