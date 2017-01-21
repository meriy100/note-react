class Api::PostsController < ApplicationController
  def index
    @posts = Post.search(params).result
  end

  def show
    find_post
  end

  private

  def find_post
    @post ||= Post.find(params[:id])
  end
end
