class Api::PostsController < ApplicationController
  def index
    @posts = Post.search(params).result
  end
end
