class Api::PostsController < ApplicationController
  def index
    @posts = Post.search(params).result
  end

  def show
    find_post
  end

  def create
    @post = Post.new(post_params)
    @post.created_user = current_user
    @post.save!
    render :show
  end

  def update
    find_post.update!(post_params)
    render :show
  end

  private

  def find_post
    @post ||= Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(
      :path, :body,
    )
  end
end
