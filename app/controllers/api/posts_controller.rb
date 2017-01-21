class Api::PostsController < ApplicationController
  def index
    @posts = Post.search(params).result
    render json: @posts.to_json
  end
end
