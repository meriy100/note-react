class Api::TreePostsController < ApplicationController
  def index
    @root_tree = TreePost.tree(Post.pub)
  end
end
