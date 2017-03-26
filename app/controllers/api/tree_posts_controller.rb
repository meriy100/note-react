class Api::TreePostsController < ApplicationController
  def index
    @root_tree = TreePost.tree(Post.pub)
    render json: @root_tree.children, each_serializer: TreePostSerializer
  end
end
