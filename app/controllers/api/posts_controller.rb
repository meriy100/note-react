class Api::PostsController < ApplicationController
  def index
    @posts = Post.pub.search(params).result.includes(:created_user).order(created_at: :desc)
    render json: @posts, each_serializer: PostSerializer
  end

  def show
    find_post
    render json: @post
  end

  def create
    @post = Post.pub.new(post_params)
    @post.created_user = current_user
    @post.save!
    render json: @post
  end

  def update
    find_post.update!(post_params)
    render json: @post
  end

  private

  def find_post
    @post ||= Post.pub.find(params[:id])
  end

  def post_params
    params.require(:post).permit(
      :path, :body,
    )
  end
end
